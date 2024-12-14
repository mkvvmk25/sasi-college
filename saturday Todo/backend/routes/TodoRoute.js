let express = require("express");
let TodoController = require("./../controllers/TodoController");
let router = express.Router();

router
	.route("/todo")
	.get(TodoController.getTodos)
	.post(TodoController.postTodo);
router
	.route("/todo/:id")
	.put(TodoController.updateTodo)
	.delete(TodoController.deleteTodo);

module.exports = { router };
