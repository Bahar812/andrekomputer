import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Cpu, 
  Printer, 
  HardDrive, 
  Database, 
  ArrowRight 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="card card-hover group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 text-primary transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center text-primary font-medium group-hover:underline"
      >
        Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ServiceHighlights: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10" />,
      title: "Computer & Laptop Repair",
      description: "Professional repair services for all brands of computers and laptops with quick turnaround time."
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Hardware Installation",
      description: "Expert installation of computer components, upgrades, and custom-built systems."
    },
    {
      icon: <Printer className="w-10 h-10" />,
      title: "Printer Services",
      description: "Comprehensive printer repair, maintenance, and installation services for all major brands."
    },
    {
      icon: <HardDrive className="w-10 h-10" />,
      title: "IT Accessories",
      description: "Wide range of genuine IT accessories including keyboards, mice, cables, and storage devices."
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Data Recovery",
      description: "Specialized data recovery services to retrieve lost data from damaged storage devices."
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Custom PC Building",
      description: "Tailored PC building services to meet your specific performance and budget requirements."
    }
  ];

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionHeading 
          title="Our Services" 
          subtitle="We offer a comprehensive range of IT solutions to meet all your tech needs"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              delay={index * 0.1} 
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;