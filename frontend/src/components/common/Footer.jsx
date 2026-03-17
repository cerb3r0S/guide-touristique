import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleNavClick = (section) => {
    console.log(`Navigate to ${section}`);
    // TODO: Implement navigation logic with React Router
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Destinations', path: 'destinations' },
        { name: 'Activities', path: 'activities' },
        { name: 'Restaurants', path: 'restaurants' },
        { name: 'Transport', path: 'transport' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: 'about' },
        { name: 'Careers', path: 'careers' },
        { name: 'Blog', path: 'blog' },
        { name: 'Privacy', path: 'privacy' }
      ]
    },
    {
      title: 'Contact',
      content: [
        { icon: '📧', text: 'hello@wanderly.com' },
        { icon: '📞', text: '+1 (555) 123–4567' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-2xl font-bold text-white mb-4">Wanderly</div>
          <p className="text-sm">
            Your digital travel companion. Discover amazing places, experiences, and hidden gems around the world.
          </p>
        </motion.div>

        {/* Footer Sections */}
        {footerSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            
            {section.links ? (
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="hover:text-white transition"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-gray-800 mt-8 pt-8 text-center text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        © {currentYear} Wanderly. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
