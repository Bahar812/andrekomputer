import React, { useState } from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'repair', name: 'Repairs' },
    { id: 'setup', name: 'Setups' },
    { id: 'store', name: 'Store' },
    { id: 'products', name: 'Products' }
  ];
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Laptop Repair",
      category: "repair",
      image: "https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Professional laptop repair service for all major brands."
    },
    {
      id: 2,
      title: "Custom Gaming PC",
      category: "setup",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "High-performance custom gaming PC build with RGB lighting."
    },
    {
      id: 3,
      title: "Our Store Front",
      category: "store",
      image: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Andre Komputer's main store location in Jakarta."
    },
    {
      id: 4,
      title: "Hardware Installation",
      category: "repair",
      image: "https://images.pexels.com/photos/163140/technology-computer-motherboard-chips-163140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Professional hardware installation and upgrade services."
    },
    {
      id: 5,
      title: "IT Accessories",
      category: "products",
      image: "https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Wide range of genuine IT accessories and components."
    },
    {
      id: 6,
      title: "Workstation Setup",
      category: "setup",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Professional workstation setup for productivity and performance."
    },
    {
      id: 7,
      title: "Data Recovery",
      category: "repair",
      image: "https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Specialized data recovery services for damaged storage devices."
    },
    {
      id: 8,
      title: "Printer Servicing",
      category: "repair",
      image: "https://siopen.hulusungaiselatankab.go.id/storage/merchant/products/2024/09/18/f8fbf943c6b5d541ac401cb740a70d16.jpg",
      description: "Comprehensive printer repair and maintenance services."
    },
    {
      id: 9,
      title: "Service Area",
      category: "store",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Our dedicated service area where repairs take place."
    },
    {
      id: 10,
      title: "Networking Solutions",
      category: "setup",
      image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Complete networking solutions for home and small businesses."
    },
    {
      id: 11,
      title: "Keyboard Collection",
      category: "products",
      image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Premium mechanical keyboards for gamers and professionals."
    },
    {
      id: 12,
      title: "Before & After Repair",
      category: "repair",
      image: "https://images.pexels.com/photos/6636091/pexels-photo-6636091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Example of our repair work: before and after."
    }
  ];
  
  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-service-bg bg-cover bg-center relative">
        <div className="absolute inset-0 bg-dark-bg/70"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Our <span className="gradient-text">Gallery</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See examples of our work, services, and facilities
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Gallery */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Andre Komputer Gallery" 
            subtitle="Browse through our facilities, services, and successful repairs"
            centered
          />
          
          {/* Category Filter */}
          <div className="flex justify-center flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="card card-hover overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(item)}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">Click to enlarge</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Image Modal */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 bg-dark-bg/90 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  className="relative max-w-4xl w-full bg-card-bg rounded-xl overflow-hidden shadow-glow"
                  initial={{ scale: 0.9, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark-bg/50 text-white hover:bg-primary/50 transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-300">{selectedImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Need Similar Service?
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              If you're facing similar issues or need any of our services, our team of experts is ready to help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="/contact" className="btn btn-primary">
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Gallery;