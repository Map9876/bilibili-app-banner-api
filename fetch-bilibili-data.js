const fs = require('fs');
const path = require('path');
const axios = require('axios');

const API_URL = 'https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&fnval=272&fourk=0&mobi_app=android&page_name=bangumi_tab';
const JSON_DIR = path.join(__dirname, 'data');
const MARKDOWN_FILE = path.join(__dirname, 'README.md');
const DIVIDER = '---'; // 分界线

// 确保目录存在
if (!fs.existsSync(JSON_DIR)) {
  fs.mkdirSync(JSON_DIR);
}

async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;

    // 检查 code 是否为 0
    if (data.code === 0) {
      console.log('API 请求成功，code 为 0');

      // 保存 JSON 文件
      const timestamp = new Date().toISOString().split('T')[0];
      const jsonFilePath = path.join(JSON_DIR, `${timestamp}.json`);
      fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

      // 处理数据并更新 Markdown 文件
      updateMarkdown(data);
    } else {
      console.error('API 请求失败，code 不为 0');
    }
  } catch (error) {
    console.error('请求出错:', error);
  }
}

function updateMarkdown(data) {
  const items = data.data.modules.flatMap(module => module.module_data.items);
  let markdownContent = '';

  // 读取已有的 Markdown 文件内容
  if (fs.existsSync(MARKDOWN_FILE)) {
    markdownContent = fs.readFileSync(MARKDOWN_FILE, 'utf8');
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
    docContent = `# Bilibili Bangumi 每日更新\n\n${DIVIDER}\n`;
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
  fs.writeFileSync(MARKDOWN_FILE, markdownContent);
}

fetchData();
