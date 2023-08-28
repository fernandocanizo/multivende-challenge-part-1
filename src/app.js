const express = require('express')
const httpLogger = require('morgan')

const app = express()
const port = 3000

app.use(httpLogger('dev'))

app.get('/ping', (req, res) => {
  return res.status(200).end()
})

app.listen(port, () => {
  console.log(`Listening on localhost, port ${port}`)
})
