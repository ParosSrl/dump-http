const EOL = require('os').EOL
const chalk = require('chalk')
const { stripIndents } = require('common-tags')

const green = chalk.green.bold
const white = chalk.white.bold


exports.default = (output) => output.requestLine + EOL + output.headers + EOL + EOL + output.body

exports.pretty = (output) => EOL + stripIndents`

  ${green('Request Line')}
  ${white(output.requestLine)}

  ${green('Headers')}
  ${white(output.headers)}

  ${green('Body')}
  ${white(output.body.length ? output.body : '<no body>')}

`
