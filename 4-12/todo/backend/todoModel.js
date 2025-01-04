let mongoose = require("mongoose");
let modelSchema = new mongoose.Schema({
	name: String,
	des: String,
	done: {
		type: Boolean,
		default: false,
	},
});

let todoModel = mongoose.model("tocol", modelSchema);

module.exports = { todoModel };
