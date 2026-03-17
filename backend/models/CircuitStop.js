const mongoose = require('mongoose');

const circuitStopSchema = new mongoose.Schema({
  circuitId: { type: mongoose.Schema.Types.ObjectId, ref: 'Circuit', required: true },
  placeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  order: Number,
  priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
  estimatedVisitDuration: Number,
  estimatedArrivalTime: Date
});

module.exports = mongoose.model('CircuitStop', circuitStopSchema);
