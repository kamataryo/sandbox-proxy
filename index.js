const http = require('http')
const request = require('request')

http
  .createServer((req, res) => {
    const headers = { ...req.headers, 'accept-language': '' }
    request('http://example.com', (err, _, body) => {
      res.write(body.toString())
      res.end(res.statusCode.toString())
    })
  })
  .listen(3000)
