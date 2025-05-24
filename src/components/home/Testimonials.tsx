import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Diana Wijaya",
      role: "Small Business Owner",
      text: "Andre Komputer has been our go-to tech partner for over 3 years. Their response time is exceptional and they've saved us from countless IT disasters. Highly recommend their services!",
      rating: 5,
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Budi Santoso",
      role: "Freelance Designer",
      text: "When my workstation crashed before a major deadline, Andre Komputer saved the day. They recovered all my files and fixed my computer within 24 hours. Their service is truly lifesaving!",
      rating: 5,
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Linda Hartono",
      role: "Office Manager",
      text: "We've purchased all our office equipment from Andre Komputer. They offer competitive prices, quality products, and excellent after-sales support. Their team is knowledgeable and always helpful.",
      rating: 4,
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Here's what our clients have to say about our services."
          centered
        />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Carousel */}
          <div className="relative overflow-hidden py-10">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Client Image */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow mx-auto">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="md:w-2/3 flex flex-col">
                  <div className="flex mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gray-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl text-gray-300 italic mb-4">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card-bg border border-gray-700 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card-bg border border-gray-700 text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;