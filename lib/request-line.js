const debug = require('debug')('dump:request-line')


module.exports = (req) => {
  let reqLine = `${req.method} ${req.url} ${protocol(req)}`
  debug('extracted request line', reqLine)

  return reqLine
}

function protocol (req) {
  return `HTTP/${req.httpVersion}`
}
