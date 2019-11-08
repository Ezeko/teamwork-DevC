const http = require('http');

const server = http.createServer((req, res)=>{
   res.end
   (console.log('server connected'))
})


server.listen(process.env.PORT || 3400);