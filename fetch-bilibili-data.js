const fs = require('fs');
const path = require('path');
const axios = require('axios');

// API URLs
const BANGUMI_API_URL = 'https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&fnval=272&fourk=0&mobi_app=android&page_name=bangumi_tab';
const CINEMA_API_URL = 'https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&fnval=272&fourk=0&mobi_app=android&page_name=cinema_tab';

// 文件路径
const BANGUMI_JSON_DIR = path.join(__dirname, 'data', 'bangumi');
const CINEMA_JSON_DIR = path.join(__dirname, 'data', 'cinema');
const BANGUMI_MARKDOWN_FILE = path.join(__dirname, 'README.md');
const CINEMA_MARKDOWN_FILE = path.join(__dirname, 'cinema_README.md');
const DIVIDER = '---'; // 分界线

// 确保目录存在
if (!fs.existsSync(BANGUMI_JSON_DIR)) {
  fs.mkdirSync(BANGUMI_JSON_DIR, { recursive: true });
}
if (!fs.existsSync(CINEMA_JSON_DIR)) {
  fs.mkdirSync(CINEMA_JSON_DIR, { recursive: true });
}

async function fetchData(apiUrl, jsonDir, markdownFile, areaName, moduleId) {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;

    // 检查 code 是否为 0
    if (data.code === 0) {
      console.log(`API 请求成功，code 为 0 (${areaName})`);

      // 保存 JSON 文件
      const timestamp = new Date().toISOString().split('T')[0];
      const jsonFilePath = path.join(jsonDir, `${timestamp}.json`);
      fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

      // 处理数据并更新 Markdown 文件
      updateMarkdown(data, markdownFile, areaName, moduleId);
    } else {
      console.error(`API 请求失败，code 不为 0 (${areaName})`);
    }
  } catch (error) {
    console.error(`请求出错 (${areaName}):`, error);
  }
}

function updateMarkdown(data, markdownFile, areaName, moduleId) {
  // 过滤出指定 module_id 的模块（区域最上方的海报）
  const targetModule = data.data.modules.find(module => module.id === moduleId);
  if (!targetModule || !targetModule.module_data || !targetModule.module_data.items) {
    console.log(`未找到 id 为 ${moduleId} 的模块或模块数据为空 (${areaName})`);
    return;
  }

  const items = targetModule.module_data.items;
  let markdownContent = '';

  // 读取已有的 Markdown 文件内容
  if (fs.existsSync(markdownFile)) {
    markdownContent = fs.readFileSync(markdownFile, 'utf8');
  }

  // 分割文档说明和每日数据
  const dividerIndex = markdownContent.indexOf(DIVIDER);
  let docContent = ''; // 文档说明部分
  let dataContent = ''; // 每日数据部分

  if (dividerIndex !== -1) {
    // 如果存在分界线，分割内容
    docContent = markdownContent.slice(0, dividerIndex + DIVIDER.length);
    dataContent = markdownContent.slice(dividerIndex + DIVIDER.length);
  } else {
    // 如果不存在分界线，初始化文档说明
    docContent = `# Bilibili ${areaName} 顶部海报\n\n${DIVIDER}\n`;
  }

  // 提取已有的 title，用于查重
  const existingTitles = new Set();
  const regex = /## (.+)\n/g;
  let match;
  while ((match = regex.exec(dataContent))) {
    existingTitles.add(match[1]);
  }

  // 添加新数据
  items.forEach(item => {
    if (item.title && item.cover && !existingTitles.has(item.title)) {
      dataContent = `## ${item.title}\n![${item.title}](${item.cover})\n\n` + dataContent;
    }
  });

  // 合并文档说明和每日数据
  markdownContent = docContent + '\n' + dataContent;

  // 保存更新后的 Markdown 文件
  fs.writeFileSync(markdownFile, markdownContent);
}

// 获取 Bangumi 数据（动画分区，最上方banner区域的module_id 为 2015）
fetchData(BANGUMI_API_URL, BANGUMI_JSON_DIR, BANGUMI_MARKDOWN_FILE, '动画', 2015);

// 获取 Cinema 数据（影视分区，最上方banner区域的module_id 为 2038）
fetchData(CINEMA_API_URL, CINEMA_JSON_DIR, CINEMA_MARKDOWN_FILE, '影视', 2038);
