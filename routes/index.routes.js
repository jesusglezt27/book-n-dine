const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant.model');

/* GET home page */
router.get("/", async (req, res, next) => {
  try{
    const restaurants = await Restaurant.find()
    res.render("index",{restaurants});
  }catch(error){
    
  }
});

router.get("/restaurant/:idrestaurant/detail", async (req, res, next) => {
  try{
    const {idrestaurant} = req.params 
    const restaurant = await Restaurant.findById(idrestaurant)
    res.render("restaurant/detail",{restaurant});
  }catch(error){
    next(error)
  }
});

module.exports = router;
