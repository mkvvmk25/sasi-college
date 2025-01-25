let { app } = require("./app");
let mongoose = require("mongoose");

let connect = async (db) => {
	let con = await mongoose.connect(`mongodb://127.0.0.1:27017/${db}`);

	if (con) {
		console.log("mongoDb is connected in db: " + db);
	}
};

let dbname = "a11todo";
let port = 9006;

connect(dbname);
app.listen(port, "127.0.0.1", () => {
	console.log(`server is active on port ${port}`);
});
