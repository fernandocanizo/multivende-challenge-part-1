const express = require('express')
const httpLogger = require('morgan')

const { getNoAddressPersonList, qsortPersonsByName } = require('./lib')

const app = express()
const port = 3000

app.use(httpLogger('dev'))

app.get('/ping', (_, res) => {
  return res.status(200).end()
})

app.get('/no-address-person', (_, res) => {
  return res.json(qsortPersonsByName(getNoAddressPersonList()))
})

app.listen(port, () => {
  console.log(`Listening on localhost, port ${port}`)
})
