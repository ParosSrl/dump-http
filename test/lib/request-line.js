const test = require('ava')
const getRequestLine = require('../../lib/request-line')


test('should print a correct request line', t => {
  let stubReq = {
    method: 'POST',
    url: '/fake',
    httpVersion: '1.1',
    connection: {
      encrypted: false
    }
  }

  let requestLine = getRequestLine(stubReq)

  t.is(requestLine, 'POST /fake HTTP/1.1')
})
