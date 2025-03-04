const fs = require('fs');
const path = require('path');
const axios = require('axios');

const API_URL = 'https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&fnval=272&fourk=0&mobi_app=android&page_name=bangumi_tab';
const JSON_DIR = path.join(__dirname, 'data');
const MARKDOWN_FILE = path.join(__dirname, 'README.md');

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
      updateMarkdown(data, timestamp);
    } else {
      console.error('API 请求失败，code 不为 0');
    }
  } catch (error) {
    console.error('请求出错:', error);
  }
}

function updateMarkdown(data, timestamp) {
  const modules = data.data.modules;
  let markdownContent = '';

  // 读取已有的 Markdown 文件内容
  if (fs.existsSync(MARKDOWN_FILE)) {
    markdownContent = fs.readFileSync(MARKDOWN_FILE, 'utf8');
  }

  // 新数据的内容
  let newContent = `## ${timestamp}\n\n`;

  modules.forEach(module => {
    if (module.module_data && module.module_data.items) {
      module.module_data.items.forEach(item => {
        if (item.title && item.cover) {
          const entry = `- **${item.title}**: ![${item.title}](${item.cover})\n`;

          // 检查是否已经存在该 title
          if (!markdownContent.includes(`**${item.title}**`)) {
            newContent += entry;
          }
        }
      });
    }
  });

  // 将新内容添加到旧内容的上方
  markdownContent = newContent + '\n\n' + markdownContent;

  // 保存更新后的 Markdown 文件
  fs.writeFileSync(MARKDOWN_FILE, markdownContent);
}

fetchData();
