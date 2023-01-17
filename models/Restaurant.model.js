const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name is required.'],
    },
    owner:{
      type: String,
      required: [true, "Owner name required"],
    },
    stars:{
      type: Number,
      required: [true, "Number of stars required"]
    },
    reviews:{
      type: String,
      required: [true, "Review required"]
    },
    images:{
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('Restaurant', restaurantSchema);