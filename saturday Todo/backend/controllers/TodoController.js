let { todoModel } = require("./../models/TodoModel");

exports.getTodos = async (req, res) => {
	try {
		let todos = await todoModel.find({});

		res.status(200).json({
			status: "sucess",
			data: todos,
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};

exports.postTodo = async (req, res) => {
	try {
		let todo = await todoModel.create(req.body);

		res.status(200).json({
			status: "success",
			data: todo,
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};
exports.updateTodo = async (req, res) => {
	try {
		let todo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(200).json({
			status: "sucess",
			data: todo,
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};
exports.deleteTodo = async (req, res) => {
	try {
		let todo = await todoModel.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: "sucess",
			data: todo,
		});
	} catch (err) {
		res.status(500).json({
			status: "fail",
			message: err.message,
		});
	}
};
