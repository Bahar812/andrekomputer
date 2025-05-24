import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Cpu, 
  HardDrive, 
  Printer, 
  Database, 
  Settings, 
  Wifi, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, index }) => {
  return (
    <motion.div 
      className="card card-hover h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-5 text-primary">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <h4 className="text-sm font-semibold text-primary mb-2">Services include:</h4>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2">
            <span className="bg-primary/20 p-1 rounded-full text-primary mt-0.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServiceProcess: React.FC = () => {
  const steps = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Diagnosis",
      description: "We perform a comprehensive analysis to identify the problem."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Solution",
      description: "We develop a plan to address the issue efficiently."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Repair",
      description: "Our technicians implement the necessary repairs or upgrades."
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Testing",
      description: "We thoroughly test to ensure everything works perfectly."
    }
  ];

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-card-bg rounded-lg p-6 border border-gray-800 h-full">
              <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary">
                {step.icon}
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-1 bg-primary/30">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Computer & Laptop Repair",
      description: "Complete repair services for desktops and laptops of all brands, addressing hardware and software issues.",
      features: [
        "Hardware troubleshooting and repair",
        "Operating system installation",
        "Virus and malware removal",
        "Performance optimization",
        "Screen replacement",
        "Battery replacement"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Hardware Installation",
      description: "Professional installation of computer components and peripherals for optimal performance.",
      features: [
        "CPU and motherboard installation",
        "RAM and storage upgrades",
        "Graphics card installation",
        "Power supply replacement",
        "Cooling system setup",
        "Peripheral device configuration"
      ]
    },
    {
      icon: <Printer className="w-12 h-12" />,
      title: "Printer Services",
      description: "Comprehensive printer repair, maintenance, and installation services for all major brands.",
      features: [
        "Printer troubleshooting",
        "Print head cleaning",
        "Cartridge replacement",
        "Network printer setup",
        "Driver installation",
        "Regular maintenance"
      ]
    },
    {
      icon: <HardDrive className="w-12 h-12" />,
      title: "IT Accessories",
      description: "Quality computer accessories and components from trusted brands at competitive prices.",
      features: [
        "Keyboards and mice",
        "Monitors and displays",
        "Storage devices",
        "Networking equipment",
        "Cables and adapters",
        "Computer cases and power supplies"
      ]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Recovery",
      description: "Specialized services to recover lost data from damaged or corrupted storage devices.",
      features: [
        "Hard drive data recovery",
        "SSD data retrieval",
        "Corrupted file recovery",
        "Accidentally deleted file restoration",
        "Damaged storage media recovery",
        "Emergency data recovery services"
      ]
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Custom PC Building",
      description: "Tailored PC building services to meet your specific performance needs and budget requirements.",
      features: [
        "Custom gaming computers",
        "Workstation builds",
        "Office desktop assemblies",
        "Component selection consultation",
        "Performance benchmarking",
        "Custom case modifications"
      ]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Software Services",
      description: "Installation, configuration, and troubleshooting of various software applications and operating systems.",
      features: [
        "Operating system installation",
        "Software troubleshooting",
        "Driver updates and management",
        "Productivity suite setup",
        "Security software installation",
        "Software license management"
      ]
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Networking Solutions",
      description: "Complete networking services for home and small business environments.",
      features: [
        "Wireless network setup",
        "Router configuration",
        "Network troubleshooting",
        "Network security implementation",
        "Network expansion",
        "Network performance optimization"
      ]
    }
  ];

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
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Comprehensive IT solutions to meet all your technology needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Our Service Offerings" 
            subtitle="We provide a wide range of IT services to meet the needs of both individuals and businesses"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <SectionHeading 
            title="Our Service Process" 
            subtitle="How we approach every repair and service request"
            centered
          />
          
          <ServiceProcess />
        </div>
      </section>
      
      {/* On-site Service */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden border-2 border-primary/30 shadow-glow">
                  <img 
                    src="https://images.pexels.com/photos/6737578/pexels-photo-6737578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Technician providing on-site service" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Accent border */}
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/30 rounded-xl -z-10"></div>
              </div>
            </motion.div>
            
            <div>
              <SectionHeading 
                title="On-Site Service Available" 
                subtitle="We come to you for convenient service at your location"
              />
              
              <motion.div
                className="space-y-4 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>
                  For businesses and customers who prefer service at their location, we offer professional on-site support throughout Jakarta and surrounding areas.
                </p>
                <p>
                  Our mobile technicians arrive fully equipped to handle most repairs, installations, and troubleshooting directly at your home or office, minimizing disruption and downtime.
                </p>
                
                <h3 className="text-white font-bold text-lg mt-6 mb-3">Benefits of On-Site Service:</h3>
                <ul className="space-y-2">
                  {[
                    "Convenient service without transporting equipment",
                    "Minimal disruption to your workflow",
                    "Immediate assistance for urgent issues",
                    "Network and multi-device setups in your environment",
                    "Same expert service as our in-shop repairs"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="bg-primary/20 p-1 rounded-full text-primary mt-0.5">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a href="/contact" className="btn btn-primary">
                    Request On-Site Service
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Services;