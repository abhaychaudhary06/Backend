const { write } = require("fs");
const http = require("http");
const path = require("path");
const server = http.createServer((req,res)=>{
    const url = new URL(req.url,`http://${req.headers.host}`);
    const method = req.method;
    const pathname = url.pathname;
    const query = url.searchParams;
    // console.log(query);
    if(pathname==="/" && method==="GET"){
        const term = query.get("q");
        res.writeHead(200,{"content-type":"text/json"});
        res.end(JSON.stringify({method:"Search received",query: term}));
    }
    else if(pathname==="/data" && method==="POST"){
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        });
        req.on("end",()=>{
            res.writeHead(201,{"content-type":"text/json"});
            body = JSON.parse(body);
            res.end(JSON.stringify({the:"ye hai",body:body}));
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/plain"});
        res.end("Hanji hai");
    }
})
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server Start at http://localhost:${PORT}`)
})