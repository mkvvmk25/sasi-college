const mongoose = require("mongoose");
let appfile = require("./app");

mongoose
	.connect("mongodb://localhost:27017/qwerty")
	.then((con) => console.log(" db connected"));

appfile.app.listen(5001, "localhost", () => console.log("port is active"));

