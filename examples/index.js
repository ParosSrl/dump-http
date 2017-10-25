const dumpHttp = require('../bin/dump-http')

dumpHttp().listen(3000, () => console.log('DumpHttp server is listening on port 3000'))
