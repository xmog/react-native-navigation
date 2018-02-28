const http = require('http');
const fs = require('fs');

const PORT = 3000;

run();

function run() {
  http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile(`${__dirname}/../docs/index.html`, (err, data) => {
        res.writeHead(200, {
          'Content-Type': 'text/html',
          'Cache-Control': 'private, no-cache, no-store, must-revalidate',
          'Expires': '-1',
          'Pragma': 'no-cache'
        });
        res.write(data);
        res.end();
      });
    } else {
      res.writeHead(404, {});
      res.end();
    }
  }).listen(PORT);
}
