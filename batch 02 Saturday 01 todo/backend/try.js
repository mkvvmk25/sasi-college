let axios = require("axios");

axios
	.get("http://localhost:5001/tasks")
	.then((full) => console.log(full.data.taskList));
