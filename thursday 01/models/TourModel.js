let mongoose = require("mongoose");


let tourSchema = new mongoose.Schema(
  {
    tour: {
      type: String,
      required:[true, "tour is madate to give"]
    },
    totalpat: {
      type: Number,
      required:[true, "mention the participants"]
    }
  }
);

let tourModel = mongoose.model("tour coll", tourSchema);

module.exports = { tourModel };