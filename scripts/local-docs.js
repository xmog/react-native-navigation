const express = require('express');

const PORT = 3000;

run();

function run() {
  const app = express();
  app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.sendFile(process.cwd() + '/docs/index.html');
  });
  app.listen(PORT);
}
