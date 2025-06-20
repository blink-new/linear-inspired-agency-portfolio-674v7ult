import { motion } from 'framer-motion';
import { Palette, Code, Smartphone, TrendingUp, Users, Zap } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Creating memorable brand identities that resonate with your audience and stand out in the market.',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Art Direction']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building fast, responsive, and scalable web applications using modern technologies.',
      features: ['React & Next.js', 'TypeScript', 'Cloud Architecture', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Digital Strategy',
      description: 'Data-driven strategies to grow your digital presence and achieve your business goals.',
      features: ['Market Research', 'User Analytics', 'Growth Hacking', 'Conversion Optimization']
    },
    {
      icon: Users,
      title: 'UX Research',
      description: 'Understanding your users through research to create intuitive and engaging experiences.',
      features: ['User Interviews', 'Usability Testing', 'Journey Mapping', 'Persona Development']
    },
    {
      icon: Zap,
      title: 'Innovation Lab',
      description: 'Exploring emerging technologies and creating cutting-edge digital solutions.',
      features: ['AI Integration', 'AR/VR Experiences', 'IoT Solutions', 'Blockchain Applications']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            What we do best
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We combine strategy, design, and technology to create digital experiences 
            that drive real business results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-600"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors mb-4">
                  <service.icon size={28} className="text-primary-100" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-2">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}