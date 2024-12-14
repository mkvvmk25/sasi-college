let axios = require("axios");

let fun = async () => {
	let s = await axios.put("http://localhost:7001/api/todo/", {
		name: "qwerty",
		description: "asdfghjkxcvbnm,",
	});

	console.log(s.data);
};

fun();
