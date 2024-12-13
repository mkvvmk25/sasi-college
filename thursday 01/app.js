let express = require("express");

let { router: tourRouter } = require("./routes/TourRoute");

let app = express();

app.use(express.json());

let s = 0;

app.use((req, res, next) => {
	console.log("i am from color ware 1");
	req.thurs = Date.now();
	s += 1;
	next();
});
app.use((req, res, next) => {
	console.log("i am from dimaonds ware 2");
	next();
});
app.use((req, res, next) => {
	console.log("i am from decorate ware 3 " + s);
	next();
});

app.use("/api/general", tourRouter);
// app.use("/api/college", tourRouter);
// app.use("/api/corporates", tourRouter);

app.all("*", (req, res, next) => {
	res.json({ status: "fail", msg: "invalid req" });
});

// loch:5001/api/general/tour
module.exports = { app };
