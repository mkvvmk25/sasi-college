let { app } = require("./app");
let mongoose = require("mongoose");

let dbname = "thursday01";
mongoose
	.connect(`mongodb://localhost:27017/${dbname}`)
	.then((con) => console.log(`db is active on DB ${dbname}`));

let port = 5004;
app.listen(port, "localhost", function () {
	console.log(`server is active on localhost:${port}`);
});
