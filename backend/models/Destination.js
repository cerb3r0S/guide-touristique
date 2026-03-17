const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  centerCoordinates: {
    lat: Number,
    lng: Number
  },
  coverImage: String,
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model('Destination', destinationSchema);
