import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { GeometricPattern } from './GeometricPattern';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-dark-900 to-dark-700">
      <GeometricPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-6 px-4 py-2 bg-dark-500 text-dark-100 rounded-full text-sm font-medium border border-dark-300"
          >
            ✨ Building the future of digital experiences
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-dark-100 mb-6 leading-tight"
          >
            Design that
            <br />
            <span className="bg-gradient-to-r from-dark-600 to-dark-800 bg-clip-text text-transparent">
              moves people
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-dark-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We craft exceptional digital experiences that drive growth, 
            engage users, and transform businesses through thoughtful design 
            and cutting-edge technology.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-dark-700 text-dark-100 px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-dark-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start a project
              <ArrowRight 
                size={18} 
                className="group-hover:translate-x-1 transition-transform duration-300" 
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-dark-200 hover:text-dark-100 transition-colors border border-dark-300 hover:border-dark-400 bg-dark-500 hover:bg-dark-600"
            >
              <div className="w-10 h-10 bg-dark-400 rounded-full flex items-center justify-center group-hover:bg-dark-500 transition-colors">
                <Play size={16} className="text-dark-100 ml-0.5" />
              </div>
              Watch our story
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-dark-300"
        >
          {[
            { number: '200+', label: 'Projects completed' },
            { number: '50+', label: 'Happy clients' },
            { number: '5+', label: 'Years of excellence' },
            { number: '15+', label: 'Team members' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-dark-100 mb-2">{stat.number}</div>
              <div className="text-sm text-dark-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}