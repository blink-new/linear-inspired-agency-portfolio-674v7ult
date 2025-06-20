import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

export function Work() {
  const projects = [
    {
      title: 'FinanceFlow',
      category: 'Fintech Platform',
      description: 'A comprehensive financial management platform for modern businesses with real-time analytics and automated workflows.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'EcoMarket',
      category: 'E-commerce',
      description: 'Sustainable marketplace connecting eco-conscious consumers with environmentally friendly products.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      tags: ['Next.js', 'Shopify', 'Stripe', 'Tailwind'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'MindfulSpace',
      category: 'Health & Wellness',
      description: 'Mental health platform offering guided meditation, therapy sessions, and wellness tracking.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'WebRTC', 'ML'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'TechCorp Rebrand',
      category: 'Brand Identity',
      description: 'Complete brand transformation for a leading technology company, including logo, guidelines, and digital assets.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80',
      tags: ['Branding', 'Design System', 'Figma', 'Motion'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="work" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-gray-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Featured work
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            A showcase of our recent projects that demonstrate our expertise 
            in creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink size={18} className="text-gray-100" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-100 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-medium text-sm">
                      {project.category}
                    </p>
                  </div>
                  <ArrowUpRight className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
                </div>
                
                <p className="text-gray-100 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700 text-gray-100 text-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-100"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gray-800 text-gray-100 px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View all projects
            <ArrowUpRight 
              size={18} 
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}