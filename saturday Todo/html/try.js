let axios = require("axios");

axios
	.get("http://localhost:5001/api/todo")
	.then((f, r) => console.log(f.data.data.todos));
