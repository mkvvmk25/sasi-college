let express = require("express");
let TourController = require("./../controllers/TourController");

let router = express.Router();



router
  .route("/tour")
  .get(TourController.getTour);
  // .post(TourController.postTour);

router
  .route("/college/:id")
  .patch(TourController.updateTour)
  .delete(TourController.deleteTour);

// post loh:5001/tour
// get loh:5001/tour



module.exports = { router };