const mongoose = require('mongoose');
const Restaurant = require('../models/Restaurant.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/book-n-dine';

const restaurants = [
    {
        name: "The Hunger Games",
        email: "dylanbistro@gmail.com",
        owner: "Dylan Torres",
        stars: 10,
        reviews: "Not bad"
    },
];

mongoose
.connect(MONGO_URI)
.then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    return Restaurant.create(restaurants);
})
.then(restaurantFromDB => {
    console.log(`Created ${restaurantFromDB.length} restaurants`);

    return mongoose.connection.close();
})
.then(() => {
    console.log('DB connection closed!');
})
.catch(err => {
    console.log(`An error occurred while creating restaurants from the DB: ${err}`);
});
