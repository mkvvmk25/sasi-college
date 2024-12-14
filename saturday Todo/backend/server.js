let { app } = require("./app");
let mongoose = require("mongoose");

let dbname = "satDb02";
mongoose
	.connect(`mongodb://127.0.0.1:27017/${dbname}`)
	.then((con) => console.log(`db is active on Db: ${dbname}`));

let port = 7001;
app.listen(port, "localhost", () =>
	console.log(`server is active on port ${port}`)
);
