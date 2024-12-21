let express = require("express");
let cors = require("cors");
let TaskController = require("./controllers/TaskController");
let app = express();

app.use(cors());
app.use(express.json());

// get post put delete

app.get("/tasks", TaskController.getTasks);
app.post("/task", TaskController.postTask);
app.put("/task/:id", TaskController.updateTask);
app.delete("/task/:id", TaskController.deleteTask);

module.exports = { app };
