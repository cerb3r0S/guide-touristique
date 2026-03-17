import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: `bg-0486D8 text-white hover:bg-0378A6 shadow-lg`,
    secondary: `bg-white text-0486D8 border border-0486D8 hover:bg-F2F2F2`,
    outline: `border border-0486D8 text-0486D8 hover:bg-0486D8 hover:text-white`,
    ghost: `text-0486D8 hover:bg-F2F2F2`
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
