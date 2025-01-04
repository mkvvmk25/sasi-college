let axios = require("axios");

let d = async () => {
	let j = await axios.get("http://127.0.0.1:8001/gettask");
  console.log(j.data.posted);
  settas
};
d();
