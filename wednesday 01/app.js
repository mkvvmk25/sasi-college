let express = require("express");
let tourController = require("./controllers/tourController");

let app = express();

app.use(express.json());

app.get("/:tours", tourController.getTour);
app.post("/posttour", tourController.postTour);

module.exports = { app };
