const { Schema, model } = require('mongoose');

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'name is required.'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      // this match will disqualify all the emails with accidental empty spaces, missing dots in front of (.)com and the ones with no domain at all
      match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
      unique: true,
      lowercase: true,
      trim: true
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
  },
  {
    timestamps: true
  }
);

module.exports = model('Restaurant', restaurantSchema);