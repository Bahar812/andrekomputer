import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Clock, Calendar } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-900/20 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-card-bg rounded-xl border border-gray-800 shadow-glow p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Need Tech Support?</h2>
              <p className="text-gray-300 mb-6">
                Our team of experts is ready to help solve your computer issues. Get in touch today for fast, reliable service.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call us at</p>
                    <p className="text-white font-medium">+62 (812) 3456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Working hours</p>
                    <p className="text-white font-medium">Mon-Fri: 9am - 6pm, Sat: 9am - 3pm</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Book an appointment</p>
                    <p className="text-white font-medium">Same-day emergency service available</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-dark-bg/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Request Service</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Service Needed
                    </label>
                    <select 
                      id="service" 
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                    >
                      <option>Select a service</option>
                      <option>Computer Repair</option>
                      <option>Laptop Repair</option>
                      <option>Printer Service</option>
                      <option>Data Recovery</option>
                      <option>Hardware Installation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <button 
                    type="button" 
                    className="w-full btn btn-primary"
                  >
                    Submit Request
                  </button>
                </form>
                
                <div className="mt-4 text-center text-sm text-gray-400">
                  Or <Link to="/contact" className="text-primary hover:underline">contact us</Link> for more details
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;