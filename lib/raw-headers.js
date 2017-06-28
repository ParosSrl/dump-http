const debug = require('debug')('dump:raw-headers')
const EOL = '\r\n'


module.exports = (headers) => {
  let output = []

  let entries = Object.entries(headers)

  for (let [header, value] of entries) {
    output.push(`${header}: ${value}`)
  }

  debug('extracted headers', output)

  return output.join('\n')
}
