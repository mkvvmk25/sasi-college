let express = require("express");
let TodoRoute = require("./routes/TodoRoute");
let cors = require("cors");
let app = express();

app.use(cors());

app.use(express.json());

app.use("/api", TodoRoute.router);

module.exports = { app };
