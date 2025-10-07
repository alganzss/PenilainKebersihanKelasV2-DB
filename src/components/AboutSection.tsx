import { motion } from 'motion/react';
import { Code, Zap, Users, Heart } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, efficient, and well-documented code that follows best practices."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized plugins that don't lag your server, even with hundreds of players online."
    },
    {
      icon: Users,
      title: "Community",
      description: "Active in the Minecraft community, always learning and sharing knowledge."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuine love for Minecraft and creating amazing experiences for players."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Crafting Digital Worlds
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              With over 3 years of experience in Minecraft plugin development, I specialize in creating 
              innovative solutions that enhance gameplay and server management.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  From Player to Developer
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  My journey began as a passionate Minecraft player who wanted to create something unique. 
                  What started as simple server modifications has evolved into a full-scale career in 
                  plugin development, working with server networks worldwide.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I specialize in <span className="text-emerald-400 font-semibold">Java development</span>, 
                  <span className="text-green-400 font-semibold"> Bukkit/Spigot APIs</span>, and 
                  <span className="text-cyan-400 font-semibold"> database integration</span>. 
                  Every plugin I create is built with performance, scalability, and user experience in mind.
                </p>
              </div>

              {/* Skills bars */}
              <div className="space-y-4">
                {[
                  { name: "Java Development", level: 95 },
                  { name: "Bukkit/Spigot API", level: 90 },
                  { name: "MySQL/Database", level: 85 },
                  { name: "Plugin Architecture", level: 92 }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-to-r from-emerald-500 to-green-400 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right content - Feature cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 bg-slate-800/50 rounded-xl border border-emerald-500/20 backdrop-blur-sm group hover:border-emerald-500/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-green-500/30 transition-colors duration-300">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20"
          >
            <blockquote className="text-xl md:text-2xl text-slate-300 italic mb-4">
              "The best plugins don't just add features – they enhance the entire server experience 
              while maintaining the essence of what makes Minecraft special."
            </blockquote>
            <cite className="text-emerald-400 font-semibold">- My Development Philosophy</cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}