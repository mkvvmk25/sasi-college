let { app } = require("./app");
let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/abc7889").then((con) => {
	console.log("db is connected");
});

app.listen(8001, "127.0.0.1", () => {
	console.log("server is active on port 8001");
});
