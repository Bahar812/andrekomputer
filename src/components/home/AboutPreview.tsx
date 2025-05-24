import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Check } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const AboutPreview: React.FC = () => {
  const features = [
    "10+ years of experience in IT solutions",
    "Certified technicians and experts",
    "Genuine parts and accessories",
    "Quick turnaround time",
    "Affordable pricing",
    "Post-service support"
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading 
              title="About Andre Komputer" 
              subtitle="Established in 2010, we've been providing top-tier IT solutions to businesses and individuals for over a decade."
            />
            
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Andre Komputer started as a small computer repair shop and has grown into a comprehensive IT service provider. Our mission is to deliver reliable, efficient, and affordable technology solutions that empower our clients.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="bg-primary/20 p-1 rounded-full text-primary mt-0.5">
                    <Check className="w-4 h-4" />
                  </span>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about" className="btn btn-outline">
                Learn More About Us <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/30 shadow-glow">
                <img 
                  src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="IT Technician working" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-card-bg p-5 rounded-lg border border-gray-800 shadow-glow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <h3 className="text-primary text-3xl font-bold">10+</h3>
                    <p className="text-gray-400 text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-primary text-3xl font-bold">5K+</h3>
                    <p className="text-gray-400 text-sm">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Accent border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary/30 rounded-xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;