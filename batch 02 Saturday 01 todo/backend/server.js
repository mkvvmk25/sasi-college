let { app } = require("./app");
let mongoose = require("mongoose");

let port = 5001;
let DBNAME = "taskDB";
mongoose
	.connect(`mongodb://127.0.0.1:27017/${DBNAME}`)
	.then((con) => console.log(`Db is active on ${DBNAME}`));

app.listen(port, "127.0.0.1", () => console.log(`server is active on ${port}`));
