let TodoController = require("./../controllers/TodoController");

let express = require("express");

let todoRoute = express.Router();

todoRoute.route("/post").post(TodoController.postTodo);
todoRoute.route("/todos").get(TodoController.getTodos);
todoRoute
	.route("/:id")
	.delete(TodoController.deleteTodo)
	.put(TodoController.updateTodo);

todoRoute.route("/delname/:id").delete(TodoController.deleteTodoName);

// 127.0.0.1:9006/todo/del/100
// 127.0.0.1:9006/todo/del/101
// 127.0.0.1:9006/todo/del/100
module.exports = { todoRoute };
