let { TaskModel } = require("./../models/TaskModel");

exports.getTasks = async (req, res) => {
	let tasks = await TaskModel.find({});

	res.json({
		status: "success",
		taskList: tasks,
	});
};
exports.postTask = async (req, res) => {
	let task1 = await TaskModel.create(req.body);

	res.json({
		status: "success",
		task: task1,
	});
};
exports.updateTask = async (req, res) => {
	let task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.json({
		status: "success",
		task: task,
	});
};
exports.deleteTask = async (req, res) => {
	let task = await TaskModel.findByIdAndDelete(req.params.id);

	res.json({
		status: "success",
		task: task,
	});
};
