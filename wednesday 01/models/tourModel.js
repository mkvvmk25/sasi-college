let mongoose = require("mongoose");

let TourSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name required"],
	},
	total: {
		type: Number,
		required: [true, "num of people is req"],
	},
});

let TourModel = mongoose.model("genral tour", TourSchema);

module.exports = { TourModel };
