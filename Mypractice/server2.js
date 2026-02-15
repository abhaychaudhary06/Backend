const user = {
    name:"Abhay",
    age:"21"
}
// const queryString = require("querystring");
const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url==="/user" && req.method==="GET"){
        res.end(JSON.stringify(user));
    }
})
const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Run at http://localhost:${PORT}`);
})

