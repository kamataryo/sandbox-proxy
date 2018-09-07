const http = require('http')
const request = require('request')

http
  .createServer((req, res) => {
    request(
      {
        url: 'http://example.com',
        headers: { 'accept-language': '' }
      },
      (err, res2, body) => {
        res.end(body.toString())
      }
    )
  })
  .listen(3000)
