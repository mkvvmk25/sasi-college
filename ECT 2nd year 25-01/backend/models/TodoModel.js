let mongoose = require("mongoose");

let todoSchema = new mongoose.Schema({
	name: String,
	des: String,
	done: {
		default: false,
		type: Boolean,
	},
});

let todoModel = mongoose.model("todo", todoSchema);

module.exports = { todoModel };
