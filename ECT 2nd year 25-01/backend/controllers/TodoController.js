let { todoModel } = require("./../models/TodoModel.js");

/* 
   getTodos
   postTodo
   deleteTodo 
   updateTodo 
*/

// aggretgation

module.exports.getTodos = async (req, res) => {
	let obj = await todoModel.find({});

	res.json({
		status: "success todoslist",
		todos: obj,
	});
};
module.exports.postTodo = async (req, res) => {
	let obj = await todoModel.create(req.body);

	res.json({
		status: "success post",
		todos: obj,
	});
};
module.exports.deleteTodo = async (req, res) => {
	console.log(req.params.id);
	let obj = await todoModel.findByIdAndDelete(req.params.id);

	res.json({
		status: "success del",
		todos: obj,
	});
};
module.exports.deleteTodoName = async (req, res) => {
	console.log(req.params.id);
	let obj = await todoModel.findOneAndDelete({ name: req.params.id });

	res.json({
		status: "success del name",
		todos: obj,
	});
};
module.exports.updateTodo = async (req, res) => {
	console.log(req.params.id);
	let obj = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
		new: false,
	});

	res.json({
		status: "success update",
		todos: obj,
	});
};
