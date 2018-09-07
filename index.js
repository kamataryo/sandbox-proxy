const http = require('http')
const request = require('request')

http
  .createServer((req, res) => {
    request(
      {
        url: 'http://example.com'
      },
      (err, res2, body) => {
        res.writeHead(200, { 'content-language': '' })
        res.end(body.toString())
      }
    )
  })
  .listen(3000)
