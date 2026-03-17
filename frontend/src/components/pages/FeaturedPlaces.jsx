import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const FeaturedPlaces = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const featuredPlaces = [
    { name: 'Ancient Temple Ruins', location: 'Greece', rating: 4.8, image: '🏛️' },
    { name: 'Tropical Paradise', location: 'Maldives', rating: 4.9, image: '🏝️' },
    { name: 'Old Town Streets', location: 'Croatia', rating: 4.7, image: '🏘️' },
    { name: 'Mountain Valley', location: 'Switzerland', rating: 4.9, image: '🏔️' }
  ];

  const handlePlaceClick = (placeName) => {
    console.log(`Navigate to place: ${placeName}`);
    // TODO: Implement navigation logic with React Router
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Places</h2>
        <p className="text-gray-600">Hand-picked destinations you'll love</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {featuredPlaces.map((place, index) => (
          <Card
            key={index}
            className="cursor-pointer"
            onClick={() => handlePlaceClick(place.name)}
          >
            <div className="h-48 bg-F2F2F2 flex items-center justify-center text-7xl">
              {place.image}
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{place.name}</h3>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                  ★ {place.rating}
                </span>
              </div>
              <p className="text-gray-600">{place.location}</p>
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedPlaces;
