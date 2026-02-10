const fs =require("fs");
const path =require("path");

const TODO_FILE = path.join(__dirname,"todo.json");

console.log(TODO_FILE);
function readTodos() {
const data = fs.readFileSync(TODO_FILE,"utf-8");
return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE,JSON.stringify(todos,null,2));
}

function addTodo(task) {
const todos =readTodos();

const newTodo = {
id:Date.now(),
task: task,
done:false
  };

  todos.push(newTodo);
writeTodos(todos);

console.log("✅ Todo added:", task);
}

addTodo("hello");