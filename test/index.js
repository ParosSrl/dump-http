const request = require('supertest')
const test = require('ava')
const dump = require('../dump-http')


test.cb('should echo a complete request dump (request line, headers and body)', t => {
  let server = dump()

  request(server)
    .get('/')
    .send({
      example: 'content'
    })
    .expect(200)
    .end((err, res) => {
      let body = res.text

      t.true(body.startsWith('GET / HTTP/1.1'))
      t.true(body.includes('content-type: application/json'))
      t.true(body.includes(JSON.stringify({ example: 'content' })))

      t.end()
    })
})

test.cb('should handle multipart/form-data bodies', t => {
  let server = dump()

  request(server)
    .post('/multipart')
    .field({
      example: 'content'
    })
    .attach('emoji', Buffer.from('💪'))
    .expect(200)
    .end((err, res) => {
      let body = res.text

      t.true(body.startsWith('POST /multipart HTTP/1.1'))
      t.true(body.includes('content-type: multipart/form-data'))
      t.true(body.includes('💪'))

      t.end()
    })
})
