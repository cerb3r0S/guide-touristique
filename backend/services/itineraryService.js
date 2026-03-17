// Simple optimization: priority + nearest distance
exports.generateItinerary = (places) => {
  return places.sort((a, b) => a.priority - b.priority);
};