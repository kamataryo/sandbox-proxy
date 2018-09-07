const http = require('http')
const request = require('request')

http
  .createServer((req, res) => {
    const headers = { ...req.headers, 'accept-language': '' }
    request('http://example.com', (err, res2, body) => {
      res.end(body.toString())
    })
  })
  .listen(3000)
