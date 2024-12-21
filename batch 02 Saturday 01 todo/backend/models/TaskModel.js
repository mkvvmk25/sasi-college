let mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
	name: String,
	description: String,
	done: {
		default: false,
		type: Boolean,
	},
});

let TaskModel = mongoose.model("todo", taskSchema);

module.exports = { TaskModel };
