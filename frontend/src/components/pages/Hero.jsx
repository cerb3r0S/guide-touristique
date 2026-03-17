import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
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

  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
    // TODO: Implement search logic
  };

  return (
    <section className="relative h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden hero-bg">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={1} />
          <Sphere args={[1, 64, 64]} scale={2.2}>
            <MeshDistortMaterial
              color="#0486D8"
              attach="material"
              distort={0.3}
              speed={1.2}
              roughness={0.2}
              metalness={0.1}
            />
          </Sphere>
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <motion.div
        className="text-center max-w-3xl z-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          variants={fadeInUp}
        >
          Discover Your <span className="text-0486D8">Next Adventure</span>
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={fadeInUp}
        >
          <span className="text-2xl font-bold text-white">
            Explore breathtaking destinations, vibrant cultures, and unforgettable experiences around the world.
          </span>
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={fadeInUp}
        >
          <SearchBar onSearch={handleSearch} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
