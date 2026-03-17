import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    console.log(`Navigate to ${section}`);
    setIsMobileMenuOpen(false);
    // TODO: Implement navigation logic with React Router
  };

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Hotels', path: '/hotels' },
    { name: 'Restaurants', path: '/restaurants' },
    { name: 'Destinations', path: '/destinations' }
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-049CD8">Wanderly</div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.path)}
            className="hover:text-049CD8 transition focus:outline-none"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <Button 
          variant="ghost" 
          size="small"
          onClick={() => handleNavClick('login')}
        >
          Login
        </Button>
        <Button 
          variant="primary" 
          size="small"
          onClick={() => handleNavClick('signup')}
        >
          Sign up
        </Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className="text-left py-2 px-4 text-gray-700 hover:text-049CD8 hover:bg-F2F2F2 rounded transition"
              >
                {item.name}
              </button>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button 
                variant="ghost" 
                size="small"
                onClick={() => handleNavClick('login')}
                className="w-full"
              >
                Login
              </Button>
              <Button 
                variant="primary" 
                size="small"
                onClick={() => handleNavClick('signup')}
                className="w-full"
              >
                Sign up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
