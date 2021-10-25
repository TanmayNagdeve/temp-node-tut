const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
       res.end('Welcome to our Home page')
   }
   if(req.url === '/about'){
       res.end("Here is the about page")
   }
   res.end(`
   <h1>Oops!</h1>
   <p>We can't find the requested page</p>
   <a href="/">back home</a>`)
})

server.listen(80)