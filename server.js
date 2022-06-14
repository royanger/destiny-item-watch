const { createServer: createHTTPSServer } = require('https')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const PORT = process.env.PORT || 3000

const httpsOptions = {
   key: fs.readFileSync('./certs/devcert.key'),
   cert: fs.readFileSync('./certs/devcert.crt'),
}

app.prepare().then(() => {
   createHTTPSServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
   }).listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on https://bungiewatch.local:${PORT}`)
   })
})
