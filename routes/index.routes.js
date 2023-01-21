const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant.model');
const Review = require('../models/Reviews.model');
/* GET home page */
router.get("/", async (req, res, next) => {
  try{
    
    const restaurants = await Restaurant.find()
    res.render("index",{restaurants});
  }catch(error){
    
  }
});


router.get("/restaurant/:idRestaurant/detail", async (req, res, next) => {
  try{
    const {idRestaurant} = req.params
const restaurant = await Restaurant.findById(idRestaurant)
const reviews = await Review.find({_restaurant:idRestaurant})
console.log('consolelog de reviews',reviews)
res.render("restaurant/detail", {restaurant,reviews})
  }catch(error){
    next(error)
  }
});

module.exports = router;
