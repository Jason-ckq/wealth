const express = require('express');
const multiparty = require('multiparty');
const path = require('path');
const fs = require('fs');
const { Buffer } = require('buffer');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PATCH, PUT, DELETE',
  );
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE');
  next();
});

// 上传文件临时路径
const STATIC_TEMPORARY = path.join(__dirname, './static/temporary');
// 上传文件最终路径
const STATIC_FILES = path.join(__dirname, './static/files');

app.post('/api/upload', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, (err, fields, files) => {
    let filename = fields.filename[0];
    let hash = fields.hash[0];
    let chunk = files.chunk[0];
    let dir = `${STATIC_TEMPORARY}/${filename}`;
    try {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);
      const buffer = fs.readFileSync(chunk.path);
      const ws = fs.createWriteStream(`${dir}/${hash}`);
      ws.write(buffer);
      ws.close();
      res.send(`${filename}-${hash} 切片上传成功`);
    } catch (error) {
      console.error(error);
      res.status(500).send(`${filename}-${hash} 切片上传失败`);
    }
  });
});

app.get('/api/merge', async (req, res) => {
  const { filename } = req.query;
  try {
    let len = 0;
    const bufferList = fs
      .readdirSync(`${STATIC_TEMPORARY}/${filename}`)
      .map((hash, index) => {
        const buffer = fs.readFileSync(
          `${STATIC_TEMPORARY}/${filename}/${index}`,
        );
        len += buffer.length;
        return buffer;
      });
    //合并文件
    const buffer = Buffer.concat(bufferList, len);
    const ws = fs.createWriteStream(`${STATIC_FILES}/${filename}`);
    ws.write(buffer);
    ws.close();
    console.log(filename);
    res.send(`${filename} - 切片合并完成`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`${filename}-合并失败`);
  }
});

app.get('/api/jsonpTest', async (req, res) => {
  const { callback } = req.query;
  if (!callback) {
    res.status(400).send('Missing callback parameter');
  } else {
    const data = { message: 'Hello, JSONP-LEE!' };
    // 将 JSON 数据包装在回调函数中，并设置响应内容类型为 "application/javascript"
    res.type('application/javascript');
    const script = `${callback}(${JSON.stringify(data)});`;
    res.send(script);
  }
});

app.listen(9001, () => {
  console.log('http://localhost:9001/');
});
