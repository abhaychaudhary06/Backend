const fs = require("fs");
const path = require("path");
const TODO_FILE = path.join(__dirname,"todos.json");
// console.log(TODO_FILE);
function readTodos(){
    const read = fs.readFileSync(TODO_FILE,"utf-8");
    return JSON.parse(read);
}

function writeTodos(todo){
    const data = JSON.stringify(todo,null,2);
    fs.writeFileSync(TODO_FILE,data);
}

function addTodo(task){
    const todos = readTodos();

    const newTodo = {
        id:Date.now(),
        task: task,
        done: false
    }
    todos.push(newTodo);

    writeTodos(todos);

    console.log("kaam succesful");
}

addTodo("khana khana hai");
addTodo("nothing today,only relax");

function listTodos(){
    const todos = readTodos();
    if(todos.length==0){
        console.log("empty hai bhaii");
        return;
    }
    todos.forEach((todo,idx)=>{
        console.log(todo.task)
    })
}

function markDone(id){
    const todos = readTodos();
    todos.forEach((todo,idx) => {
        if(todo.id===id){
            todo.done=true;
        }
    });
    writeTodos(todos);
    console.log("Todo marked !!");
    
}
console.log(listTodos());