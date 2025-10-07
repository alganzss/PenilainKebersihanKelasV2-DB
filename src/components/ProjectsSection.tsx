import { motion } from 'motion/react';
import { ExternalLink, Github, Download, Star, Users, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: "EconomyPlus",
      description: "Advanced economy system with shop integration, auctions, and dynamic pricing. Features multi-currency support and comprehensive transaction logging.",
      image: "https://images.unsplash.com/photo-1663435507433-405579d2df28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1ODk4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Economy", "MySQL", "GUI", "Multi-Server"],
      downloads: "2.5K",
      rating: 4.8,
      featured: true
    },
    {
      title: "PvPArena Pro",
      description: "Comprehensive PvP arena system with custom game modes, ranking system, and spectator features. Includes tournament management and rewards.",
      image: "https://images.unsplash.com/photo-1587075946867-6c2a61326a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHB1cnBsZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NTg5ODM4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["PvP", "Arenas", "Tournaments", "Statistics"],
      downloads: "1.8K",
      rating: 4.9,
      featured: false
    },
    {
      title: "CustomCrafting",
      description: "Create custom recipes and crafting mechanics. Features recipe discovery system, animated crafting, and integration with other plugins.",
      image: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1ODk4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Crafting", "Recipes", "Items", "API"],
      downloads: "3.2K",
      rating: 4.7,
      featured: true
    },
    {
      title: "ServerStats",
      description: "Real-time server monitoring and statistics tracking. Web dashboard integration with performance metrics and player analytics.",
      image: "https://images.unsplash.com/photo-1663435507433-405579d2df28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1ODk4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Monitoring", "Analytics", "Web API", "Dashboard"],
      downloads: "1.4K",
      rating: 4.6,
      featured: false
    },
    {
      title: "QuestMaster",
      description: "Dynamic quest system with branching storylines, custom objectives, and reward management. Features NPC integration and progress tracking.",
      image: "https://images.unsplash.com/photo-1587075946867-6c2a61326a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMHB1cnBsZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NTg5ODM4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Quests", "NPCs", "Story", "Progression"],
      downloads: "2.1K",
      rating: 4.8,
      featured: false
    },
    {
      title: "WorldGuard+",
      description: "Enhanced world protection with advanced region management, custom flags, and performance optimizations for large servers.",
      image: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrJTIwc2NyZWVufGVufDF8fHx8MTc1ODk4MzgzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Protection", "Regions", "Performance", "Administration"],
      downloads: "4.1K",
      rating: 4.9,
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 text-sm font-medium mb-4">
              My Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Featured Plugins
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A showcase of plugins that have enhanced thousands of Minecraft servers worldwide, 
              each crafted with attention to detail and performance.
            </p>
          </motion.div>

          {/* Featured projects */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-emerald-500/20 backdrop-blur-sm group hover:border-emerald-500/40 transition-all duration-300"
                >
                  {/* Project image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    
                    {/* Featured badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        <Download className="w-3 h-3 mr-1" />
                        {project.downloads}
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        <Star className="w-3 h-3 mr-1" />
                        {project.rating}
                      </Badge>
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs bg-slate-700/50 text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border-emerald-500/30 flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-8 flex items-center"
            >
              <Zap className="w-6 h-6 text-emerald-400 mr-2" />
              More Projects
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50 backdrop-blur-sm group hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex space-x-1">
                      <span className="text-xs text-slate-400 flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {project.downloads}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-slate-700/30 text-slate-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-slate-700/30 text-slate-400">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{project.rating}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-emerald-400">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-slate-400 hover:text-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-emerald-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Want a Custom Plugin?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              I create tailored solutions for your server's unique needs. From simple utilities to complex game mechanics, 
              I can bring your ideas to life.
            </p>
            <Button 
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0"
            >
              <Users className="w-5 h-5 mr-2" />
              Let's Work Together
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}