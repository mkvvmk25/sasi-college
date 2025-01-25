let express = require("express");
let { todoRoute } = require("./routes/TodoRoute");
let cors = require("cors");

let app = express();
app.use(cors());

app.use(express.json());

app.use("/todo", todoRoute);

module.exports = { app };
