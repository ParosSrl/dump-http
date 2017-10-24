const http = require('http')
const getRawBody = require('raw-body')
const debug = require('debug')('dump:main')
const log = require('../lib/log')
const format = require('../lib/format')
const getRequestLine = require('../lib/request-line')
const getRawHeaders = require('../lib/raw-headers')

module.exports = () => http.createServer(handler)

async function handler (req, res) {
  log.info('Request', 'Got new request')

  let parts = {
    requestLine: getRequestLine(req),
    headers: getRawHeaders(req.headers)
  }

  try {
    parts.body = await getRawBody(req)
  } catch (e) {
    log.warn('Error', 'Failed to parse body')
    parts.body = '<Parse failed>'
  }

  let output = format.default(parts)
  log.info('Dump', format.pretty(parts))

  res.end(output)
}
