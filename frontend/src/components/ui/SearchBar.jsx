import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const SearchBar = ({ 
  placeholder = 'Search destinations, activities...', 
  onSearch,
  className = '',
  ...props 
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(searchTerm);
  };

  return (
    <motion.div 
      className={`flex bg-white rounded-full shadow-lg overflow-hidden border border-gray-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-6 py-3 w-full sm:w-80 outline-none text-gray-700"
        />
        <Button type="submit" size="medium" className="rounded-l-none">
          Explore
        </Button>
      </form>
    </motion.div>
  );
};

export default SearchBar;
