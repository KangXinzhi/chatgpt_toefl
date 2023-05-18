// 引入依赖模块
import express from 'express';
import fs from 'fs';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import bodyParser from 'body-parser';
import cors from 'cors';

import { chatLangChain } from './utils/index.js';


// 创建 Express 应用程序
const app = express();
app.use(cors());
app.use(bodyParser.json()); // 解析JSON格式的请求体
app.use(bodyParser.urlencoded({ extended: true })); // 解析urlencoded格式的请求体


// 定义聊天相关接口
// 请求数据
app.post('/chat', async (req, res) => {
  const { topic, answer } = req.body; // 获取请求体中的data字段
  console.log(topic,answer)

  if (!topic || !answer) return;
  const response = await chatLangChain(topic, answer); // 处理数据
  console.log(response);
  res.send(response); // 返回新数据
});

// 启动应用程序
const port = 8002;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
