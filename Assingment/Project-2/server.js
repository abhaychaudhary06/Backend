const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const method = req.method;
    const pathname = url.pathname;
    const params = url.searchParams;
    if (method === "GET" && pathname === "/") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Welcome to notes Api");
    }
    /*else if (pathname === "/notes" && method === "GET") {
        let file = fs.readFileSync("notes.json", "utf-8");
        file = JSON.parse(file);
        res.writeHead(200, { "content-type": "text/json" });
        res.end(JSON.stringify(file));

    }*/
    else if (method === "POST" && pathname === "/notes") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            const newNote = JSON.parse(body);
            fs.readFile("notes.json", "utf-8", (err, data) => {
                notes = JSON.parse(data);
                notes.push(newNote);
                fs.writeFile("notes.json", JSON.stringify(notes), () => {
                    res.writeHead(200,{"content-type":"text/json"});
                    res.end(JSON.stringify({message : "Note added"
                    }))
                })
            })
        })

    }
    else if(method==="GET" && pathname==="/users"){
        const id = params.get("id");
        fs.readFile("notes.json","utf-8",(err,data)=>{
            const notes = JSON.parse(data);
            notes.forEach((ele) => {
                if(ele.id===id){
                    res.end(JSON.stringify(id));
                }
            });
        })
        res.end(JSON.stringify("Not found"));
    }
})
const PORT = 3005;
server.listen(PORT, () => {
    console.log(`this is valid bhaii http://localhost:${PORT}`);
})
