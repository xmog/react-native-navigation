const express = require('express');

const PORT = 3000;

run();

function run() {
  const app = express();
  app.get('/', (req, res) => {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    res.sendFile(process.cwd() + '/docs/index.html');
  });
  app.listen(PORT);
}
