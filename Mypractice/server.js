const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.write("<p>This is HTML response</p>");
  res.end();
    
})

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`server run at http://localhost:${PORT}`)
})