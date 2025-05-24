import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool as Tool, Monitor, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 20 
      } 
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-pattern bg-cover bg-center py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/70 to-dark-bg z-0"></div>
      
      {/* Animated particles/lines for tech feel */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 h-px"
            style={{
              width: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 180}deg`
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              width: [
                Math.random() * 150 + 50,
                Math.random() * 200 + 100,
                Math.random() * 150 + 50
              ]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full text-xs font-medium bg-primary/10 text-primary mb-6"
              variants={itemVariants}
            >
              Sales • Service • Support
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={itemVariants}
            >
              Your Trusted <span className="gradient-text">Computer Solutions</span> Partner
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-xl"
              variants={itemVariants}
            >
              From hardware repairs to software solutions, Andre Komputer delivers expertise you can count on. Serving businesses and individuals with reliable tech services since 2010.
            </motion.p>
            
            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <Link to="/contact" className="btn btn-primary glow-effect">
                Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative w-full max-w-md">
              {/* Futuristic computer graphic */}
              <div className="w-full h-80 bg-primary/5 rounded-2xl border border-primary/20 shadow-glow relative overflow-hidden">
                {/* Animated components inside */}
                <motion.div 
                  className="absolute top-6 left-6 p-4 rounded-xl bg-dark-bg/90 border border-primary/30"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Monitor className="w-10 h-10 text-primary mb-2" />
                  <div className="h-1 w-16 bg-primary/50 rounded-full mb-1"></div>
                  <div className="h-1 w-10 bg-primary/30 rounded-full"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-6 right-6 p-4 rounded-xl bg-dark-bg/90 border border-primary/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Tool className="w-10 h-10 text-primary mb-2" />
                  <div className="h-1 w-14 bg-primary/50 rounded-full mb-1"></div>
                  <div className="h-1 w-8 bg-primary/30 rounded-full"></div>
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(0, 191, 255, 0.5)",
                      "0 0 20px 5px rgba(0, 191, 255, 0.3)",
                      "0 0 0 0 rgba(0, 191, 255, 0.5)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <HardDrive className="w-12 h-12 text-primary" />
                </motion.div>
                
                {/* Tech circuit lines */}
                {[1, 2, 3, 4].map((_, i) => (
                  <motion.div 
                    key={i}
                    className={`absolute h-px bg-primary/40`}
                    style={{
                      top: `${25 * i}%`,
                      left: 0,
                      right: 0
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      backgroundImage: [
                        'linear-gradient(90deg, transparent 0%, #00BFFF 50%, transparent 100%)',
                        'linear-gradient(90deg, transparent 10%, #00BFFF 60%, transparent 100%)',
                        'linear-gradient(90deg, transparent 0%, #00BFFF 50%, transparent 100%)'
                      ]
                    }}
                    transition={{
                      duration: 4,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;