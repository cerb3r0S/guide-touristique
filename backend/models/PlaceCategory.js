const mongoose = require('mongoose');

const placeCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  icon: String
});

module.exports = mongoose.model('PlaceCategory', placeCategorySchema);
