let express = require("express");
let { todoModel } = require("./todoModel.js");
let app = express();
let cors = require("cors");

app.use(cors());
app.use(express.json()); // middle ware req for posting
// ****************************************

// post
app.post("/postTask", async (req, res) => {
	let task = await todoModel.create(req.body);
	res.json({
		status: "success",
		posted: task,
	});
});

// get
app.get("/getTask", async (req, res) => {
	let task = await todoModel.find();
	res.json({
		status: "success",
		posted: task,
	});
});

// update

app.put("/update/:id", async (req, res) => {
	let task = await todoModel.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	res.json({
		status: "updated",
		deleted: task,
	});
});
// del
app.delete("/delete/:id", async (req, res) => {
	let task = await todoModel.findByIdAndDelete(req.params.id);
	res.json({
		status: "deleted",
		deleted: task,
	});
});

//

module.exports = { app };
