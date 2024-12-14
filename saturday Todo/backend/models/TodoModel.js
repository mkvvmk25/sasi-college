let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is mandate"],
	},
	description: {
		type: String,
		required: [true, "descriptions is mandate"],
	},
	done: {
		type: Boolean,
		required: [true, "done is req"],
		default: false,
	},
});

let todoModel = mongoose.model("task", todoSchema);

module.exports = { todoModel };
