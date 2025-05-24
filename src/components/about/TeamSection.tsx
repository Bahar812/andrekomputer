import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TeamSection: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Andre Wijaya",
      role: "Founder & CEO",
      bio: "With over 15 years of experience in IT, Andre founded the company with a mission to provide reliable tech solutions to businesses and individuals.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Sinta Hartono",
      role: "Technical Director",
      bio: "Sinta leads our technical team with expertise in hardware diagnostics and complex system architecture. She ensures our repairs meet the highest standards.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Budi Santoso",
      role: "Senior Technician",
      bio: "Specializing in data recovery and system optimization, Budi has rescued countless devices and data for our clients over his 8 years with the company.",
      image: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Lina Kusuma",
      role: "Customer Relations",
      bio: "Lina ensures every client receives personalized attention and clear communication throughout their service experience with Andre Komputer.",
      image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      social: {
        facebook: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="section-padding bg-dark-bg">
      <div className="container-custom">
        <SectionHeading 
          title="Meet Our Team" 
          subtitle="The talented professionals behind Andre Komputer's success"
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="card card-hover overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-4 relative group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Social Icons */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {member.social.facebook && (
                    <a 
                      href={member.social.facebook} 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/30 hover:text-primary transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/30 hover:text-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary/30 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;