const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  type: { type: String, enum: ['hotel', 'restaurant', 'monument', 'entertainment', 'transport'], required: true },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'PlaceCategory' },
  description: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  images: [String],
  rating: Number,
  priceRange: String,
  openingHours: String,
  tags: [String],
  isPublished: { type: Boolean, default: false }
});

module.exports = mongoose.model('Place', placeSchema);
