const test = require('ava')
const getRawHeaders = require('../../lib/raw-headers.js')


test('should print raw headers from parsed headers object', t => {
  let headers = {
    'user-agent': 'fake-agent',
    accept: '*/*',
    'content-length': 3,
    'content-type': 'text/plain'
  }

  let rawHeaders = getRawHeaders(headers)
  let expected = 'user-agent: fake-agent\naccept: */*\ncontent-length: 3\ncontent-type: text/plain'

  t.is(rawHeaders, expected)
})
