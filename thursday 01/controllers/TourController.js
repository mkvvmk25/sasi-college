let { tourModel } = require("./../models/TourModel");

exports.getTour = async (req, res) => {
	try {
		let docs = await tourModel.find({});

		res.json({
			status: "sucess",
			data: docs,
		});
  }
  catch (err)
  {
		res.json({
			status: "fail",
			message: "err.message",
		});
	}
	// let docs = await tourModel.find({ totalpat: { $gte: 25 } });
};
exports.postTour = async (req, res) => {
	try {
		let docs = await tourModel.create(req.body);

		res.json({
			status: "sucess",
			data: docs,
		});
  }
  catch (err)
  {
		res.json({
			status: "fail",
			message: "err.message",
		});
	}
	// let docs = await tourModel.find({ totalpat: { $gte: 25 } });
};
