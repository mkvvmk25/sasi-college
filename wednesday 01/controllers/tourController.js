let url = require("url");
let Tourfile = require("./../models/tourModel");

exports.postTour = (req, res) => {
	let obj = req.body;
	console.log(obj);
  
  // https://bit.ly/RA-111224

	Tourfile.TourModel.create(obj)
		.then((full, rej) => {
			console.log("post is sucess");
			res.json({ status: "sucess", data: obj });
		})
		.catch((err) => {
			console.log(err.message, "contnue giving proper");
			res.json({
				status: "fail",
				reason: err.message,
			});
		});
};

exports.getTour = (req, res) => {
	// fetch some thing fromn the DB
	// console.log(req);

	res.status(200);
	res.json({
		result: "sucess",
		data: {
			params: req.params,
			urlinfo: req.url,
			urlextract: url.parse(req.url, true),
		},
	});
};

/* 
{
  name:string,
  occupatants: number,

}


*/
