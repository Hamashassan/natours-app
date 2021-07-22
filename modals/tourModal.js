const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
    unique: true,
    trim: true,
  },
  maxGroupSize: Number,
  difficulty: String,
  duration: {
    type: Number,
    required: [true, "duration required"],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "price requied"],
  },
  images: [String],
  startDates: [Date],
  summary: {
    type: String,
    required: [true, "summary required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
