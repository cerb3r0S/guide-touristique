const mongoose = require('mongoose');

const subscriptionPlanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days
  features: [String],
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('SubscriptionPlan', subscriptionPlanSchema);
