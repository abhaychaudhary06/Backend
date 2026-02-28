const { write } = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    

    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Welcome to home page");
    }
    else if(req.method==="GET" && req.url==="/users"){
        const users = { users: ["Alice","Bob","Charlie"]}
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(JSON.stringify(users.users));
    }
    else if(req.url==="/users" && req.method==="POST"){
        let body="";
        req.on("data",()=>{
            body+=data;
        })
        req.on("end",()=>{
            res.writeHead(201,{"Content-Type": "text/json"});
            res.end();
        })
    }
})
const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Run at http://localhost:${PORT}`);
})