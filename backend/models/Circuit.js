const mongoose = require('mongoose');

const circuitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  title: String,
  selectedHotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  selectedRestaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  selectedMonuments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  selectedEntertainment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  selectedTransport: { type: mongoose.Schema.Types.ObjectId, ref: 'Place' },
  estimatedDuration: Number,
  estimatedDistance: Number,
  routePolyline: String,
  status: { type: String, enum: ['draft', 'generated', 'archived'], default: 'draft' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Circuit', circuitSchema);
