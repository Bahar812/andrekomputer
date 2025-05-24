import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import TeamSection from '../components/about/TeamSection';
import { motion } from 'framer-motion';
import { Lightbulb, Clock, Heart, Trophy } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="bg-card-bg rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Trophy className="w-7 h-7" />,
      title: "Excellence",
      description: "We strive for excellence in every repair, installation, and customer interaction."
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Commitment",
      description: "We're committed to resolving your tech problems with the highest level of service."
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Speed",
      description: "We understand the urgency of technology issues and work efficiently to minimize downtime."
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Innovation",
      description: "We continuously update our knowledge and tools to provide cutting-edge solutions."
    }
  ];

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
              About <span className="gradient-text">Andre Komputer</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your trusted partner for comprehensive IT solutions since 2010
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-primary/30 shadow-glow">
                  <img 
                    src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Andre Komputer store front" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Accent border */}
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/30 rounded-xl -z-10"></div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="From a small repair shop to a comprehensive IT service provider"
              />
              
              <motion.div
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  Andre Komputer was founded in 2010 by Andre Wijaya, a passionate tech enthusiast with a vision to provide reliable and affordable technology solutions to the local community.
                </p>
                <p>
                  What began as a small computer repair shop has grown into a comprehensive IT service provider, offering everything from hardware repairs to custom PC builds, software installations, and a wide range of IT accessories.
                </p>
                <p>
                  Over the years, we've built a reputation for technical excellence, honest service, and customer satisfaction. Our team has expanded to include certified technicians, IT specialists, and customer service professionals who share our commitment to quality.
                </p>
                <p>
                  Today, Andre Komputer serves both individual customers and businesses throughout Jakarta and surrounding areas, providing end-to-end technology solutions that keep our clients productive and connected.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionHeading 
              title="Mission & Vision" 
              subtitle="Guiding principles that drive our business"
              centered
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-card-bg rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To deliver reliable, efficient, and affordable technology solutions that empower our clients, while providing exceptional customer service that exceeds expectations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-card-bg rounded-xl p-8 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted technology partner in our community, known for technical excellence, integrity, and customer-focused service that helps individuals and businesses thrive in the digital world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and relationships"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
    </PageTransition>
  );
};

export default About;