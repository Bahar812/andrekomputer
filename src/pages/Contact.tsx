import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Location",
      details: "123 Tech Plaza, Digital Avenue, Jakarta, Indonesia"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      details: "+62 (812) 3456-7890"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "info@andrekomputer.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Friday: 9am - 6pm\nSaturday: 9am - 3pm\nSunday: Closed"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {contactDetails.map((item, index) => (
        <motion.div 
          key={index}
          className="bg-card-bg rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
            {item.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-gray-300 whitespace-pre-line">{item.details}</p>
        </motion.div>
      ))}
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <motion.div 
      className="bg-card-bg rounded-xl border border-gray-800 p-8 shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Your Name
            </label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
            Subject
          </label>
          <input 
            type="text" 
            id="subject" 
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
            placeholder="What is this regarding?"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
            Message
          </label>
          <textarea 
            id="message" 
            rows={5} 
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white resize-none"
            placeholder="How can we help you?"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-dark-bg/80"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="gradient-text">Andre Komputer</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get in touch with our team for inquiries, services, or support
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Contact Information" 
            subtitle="Several ways to get in touch with our team"
            centered
          />
          
          <ContactInfo />
        </div>
      </section>
      
      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ContactForm />
            
            <motion.div 
              className="h-full min-h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card-bg rounded-xl border border-gray-800 p-8 shadow-glow h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Find Us</h3>
                <div className="relative h-full min-h-[300px] rounded-lg overflow-hidden">
                  {/* This would be replaced with an actual Google Maps embed in a real application */}
                  <div className="absolute inset-0 bg-primary/5 border border-gray-700 flex items-center justify-center">
                    <p className="text-gray-400">Google Maps would be embedded here</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Quick answers to common inquiries"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-10 space-y-6">
            {[
              {
                question: "What are your service hours?",
                answer: "Our service center is open Monday through Friday from 9am to 6pm, and Saturday from 9am to 3pm. We are closed on Sundays and public holidays."
              },
              {
                question: "Do you offer on-site services?",
                answer: "Yes, we provide on-site services for businesses and residential clients throughout Jakarta and surrounding areas. Additional fees may apply based on distance."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept cash, credit/debit cards, bank transfers, and select mobile payment apps. For larger repairs or custom builds, installment options are available."
              },
              {
                question: "Do you provide warranty for repairs?",
                answer: "Yes, all our repairs come with a 30-day warranty. Parts replacement includes manufacturer warranties that can range from 3 months to 1 year depending on the component."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-card-bg rounded-lg border border-gray-800 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                    <span className="relative ml-2 flex-shrink-0">
                      <svg 
                        className="w-5 h-5 text-primary group-open:rotate-180 transition-transform duration-300" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;