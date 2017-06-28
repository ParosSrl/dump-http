const chalk = require('chalk')
const moment = require('moment')

const info = chalk.cyan.bold
const warning = chalk.yellow.bold


function date () {
  return moment().format('HH:MM:ss:SSS')
}

exports.info = (context, ...args) => {
  return console.log.apply(console, [date(), info(context), ...args])
}

exports.warn = (context, ...args) => {
  return console.log.apply(console, [date(), warning(context), ...args])
}
