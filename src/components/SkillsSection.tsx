import { motion } from 'motion/react';
import { Code2, Database, Server, Wrench, Shield, Zap } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 95, color: "from-orange-400 to-red-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-400 to-orange-500" },
        { name: "Python", level: 75, color: "from-blue-400 to-green-500" },
        { name: "SQL", level: 85, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      title: "Minecraft APIs",
      icon: Server,
      skills: [
        { name: "Bukkit/Spigot", level: 92, color: "from-emerald-400 to-green-500" },
        { name: "Paper API", level: 88, color: "from-cyan-400 to-blue-500" },
        { name: "Velocity", level: 70, color: "from-indigo-400 to-purple-500" },
        { name: "BungeeCord", level: 75, color: "from-pink-400 to-red-500" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        { name: "MySQL", level: 88, color: "from-blue-400 to-cyan-500" },
        { name: "SQLite", level: 85, color: "from-green-400 to-emerald-500" },
        { name: "MongoDB", level: 72, color: "from-purple-400 to-indigo-500" },
        { name: "Redis", level: 78, color: "from-red-400 to-pink-500" }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: [
        { name: "Maven", level: 90, color: "from-orange-400 to-yellow-500" },
        { name: "Gradle", level: 85, color: "from-teal-400 to-cyan-500" },
        { name: "Git", level: 88, color: "from-slate-400 to-gray-500" },
        { name: "IntelliJ IDEA", level: 95, color: "from-blue-400 to-purple-500" }
      ]
    },
    {
      title: "Server Management",
      icon: Shield,
      skills: [
        { name: "Linux Administration", level: 82, color: "from-emerald-400 to-teal-500" },
        { name: "Docker", level: 75, color: "from-blue-400 to-indigo-500" },
        { name: "Performance Optimization", level: 88, color: "from-green-400 to-emerald-500" },
        { name: "Security", level: 85, color: "from-red-400 to-orange-500" }
      ]
    },
    {
      title: "Specializations",
      icon: Zap,
      skills: [
        { name: "Custom Mechanics", level: 92, color: "from-yellow-400 to-orange-500" },
        { name: "Economy Systems", level: 88, color: "from-emerald-400 to-green-500" },
        { name: "PvP Enhancements", level: 85, color: "from-red-400 to-pink-500" },
        { name: "Mini-games", level: 90, color: "from-purple-400 to-indigo-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              My Development Arsenal
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of crafting plugins and solving complex server challenges.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-emerald-500/20 backdrop-blur-sm group hover:border-emerald-500/40 transition-all duration-300"
              >
                {/* Category header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-green-500/30 transition-colors duration-300">
                    <category.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300 font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "linear"
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Always Learning",
                  description: "Staying updated with the latest Minecraft updates and Java improvements"
                },
                {
                  title: "Best Practices",
                  description: "Following industry standards for code quality, documentation, and testing"
                },
                {
                  title: "Performance First",
                  description: "Optimizing every line of code for maximum server performance"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4"
                >
                  <h4 className="text-lg font-semibold text-emerald-400 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}