import React from 'react';
import PageTransition from '../components/common/PageTransition';
import SectionHeading from '../components/common/SectionHeading';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How to Extend Your Laptop's Battery Life",
      excerpt: "Practical tips to maximize your laptop's battery performance and extend its overall lifespan.",
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "May 15, 2023",
      author: "Andre Wijaya",
      category: "Maintenance"
    },
    {
      id: 2,
      title: "SSD vs HDD: Which Storage Option Is Right For You?",
      excerpt: "A comprehensive comparison of solid-state drives and hard disk drives to help you make the right choice.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 28, 2023",
      author: "Sinta Hartono",
      category: "Hardware"
    },
    {
      id: 3,
      title: "Essential Security Practices for Small Businesses",
      excerpt: "Protect your business from cyber threats with these fundamental security measures and best practices.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "April 12, 2023",
      author: "Budi Santoso",
      category: "Security"
    },
    {
      id: 4,
      title: "The Ultimate Guide to Cleaning Your Computer",
      excerpt: "Step-by-step instructions for safely cleaning your computer's hardware to improve performance and longevity.",
      image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 30, 2023",
      author: "Lina Kusuma",
      category: "Maintenance"
    },
    {
      id: 5,
      title: "How to Choose the Right Printer for Your Needs",
      excerpt: "A comprehensive guide to help you select the perfect printer based on your specific requirements.",
      image: "https://images.pexels.com/photos/4792730/pexels-photo-4792730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "March 15, 2023",
      author: "Andre Wijaya",
      category: "Hardware"
    },
    {
      id: 6,
      title: "Troubleshooting Common Windows Errors",
      excerpt: "Solutions for the most frequent Windows problems that users encounter and how to resolve them.",
      image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      date: "February 28, 2023",
      author: "Sinta Hartono",
      category: "Software"
    }
  ];
  
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-hero-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-dark-bg/80"></div>
        <div className="container-custom relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech <span className="gradient-text">Blog & Tips</span>
            </h1>
            <p className="text-xl text-gray-300">
              Helpful articles, guides, and news from our experts
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <SectionHeading 
            title="Latest Article" 
            subtitle="Our most recent tech insights and tutorials"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-3">
                {featuredPost.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
              <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{featuredPost.author}</span>
                </div>
              </div>
              
              <Link to={`/blog/${featuredPost.id}`} className="btn btn-primary inline-flex self-start">
                Read Article <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container-custom">
          <SectionHeading 
            title="More Tech Tips & Articles" 
            subtitle="Browse our collection of helpful resources"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {regularPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                className="card card-hover overflow-hidden h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex-grow flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-2 self-start">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline inline-flex items-center">
                      Read more <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="btn btn-outline">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-card-bg rounded-xl border border-gray-800 shadow-glow p-8 md:p-10">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated with Tech Tips</h2>
              <p className="text-gray-300">
                Subscribe to our newsletter to receive the latest tech news, tips, and special offers directly in your inbox.
              </p>
            </motion.div>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-primary focus:border-primary text-white"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </motion.form>
            
            <motion.p 
              className="text-gray-400 text-sm text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </motion.p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;