import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, Heart, Gamepad2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      color: 'hover:text-slate-300'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@mcdevcraft.dev',
      color: 'hover:text-emerald-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Custom Plugin Development',
    'Server Setup & Configuration',
    'Plugin Modification',
    'Technical Consultation'
  ];

  return (
    <footer className="bg-slate-900/90 backdrop-blur-sm border-t border-emerald-500/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg">
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Gamepad2 className="w-7 h-7 text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">MCDevCraft</h3>
                <p className="text-emerald-400 text-sm">Minecraft Plugin Developer</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Crafting extraordinary Minecraft plugins and server experiences that enhance gameplay 
              and bring communities together. Every line of code is written with passion and precision.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} transition-colors duration-200 border border-slate-700/50 hover:border-emerald-500/30`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-400 text-sm leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} MCDevCraft.</span>
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['#ef4444', '#f97316', '#ef4444']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <span>for the Minecraft community.</span>
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <motion.a
                href="#"
                whileHover={{ color: '#10b981' }}
                className="transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#10b981' }}
                className="transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-6 pt-6 border-t border-slate-800"
          >
            <p className="text-slate-500 text-xs">
              Built with React, TypeScript, and Tailwind CSS. 
              <span className="mx-2">•</span>
              Hosted with love on the web.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-cyan-400" />
    </footer>
  );
}