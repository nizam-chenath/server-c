var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req,res) => {

    var q = url.parse(req.url, true)
    
    if(q.pathname === "/"){
        fs.readFile('index.html',(err,data) => {
            res.writeHead(200,{'Content-Type' : "text/html"  })
            res.write(data)
            res.end()
      })
    }
    else if(q.pathname === "/login"){
        fs.readFile('login.html',(err,data) =>{
            res.write(data)
            res.end()
        })
    }else if(q.pathname === '/loginaction'){
        console.log(q.query)
    }

}).listen(4000)