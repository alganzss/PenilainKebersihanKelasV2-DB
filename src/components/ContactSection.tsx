import { motion } from 'motion/react';
import { Mail, MessageCircle, Github, Send, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 relative">
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
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Have a plugin idea or need custom Minecraft development? I'm here to help bring your vision to life. 
              Let's discuss your project and create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-slate-300 leading-relaxed mb-8">
                  I'm available for freelance projects, collaborations, and consultations. 
                  Whether you need a simple utility plugin or a complex game system, I'm ready to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    info: "contact@mcdevcraft.dev",
                    description: "Best for detailed project discussions",
                    href: "mailto:contact@mcdevcraft.dev"
                  },
                  {
                    icon: MessageCircle,
                    title: "Discord",
                    info: "MCDevCraft#1234",
                    description: "Quick questions and real-time chat",
                    href: "#"
                  },
                  {
                    icon: Github,
                    title: "GitHub",
                    info: "@mcdevcraft",
                    description: "View my code and contributions",
                    href: "#"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    info: "Available Worldwide",
                    description: "Remote work, any timezone",
                    href: "#"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-xl border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                      <contact.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{contact.title}</h4>
                      <p className="text-emerald-400 font-medium mb-1">{contact.info}</p>
                      <p className="text-sm text-slate-400">{contact.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <h4 className="font-semibold text-white">Availability</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Currently accepting new projects! Response time: Usually within 24 hours. 
                  Project timelines vary based on complexity and scope.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: "Projects Completed", value: "50+" },
                  { label: "Happy Clients", value: "30+" }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-emerald-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Start Your Project
                  </CardTitle>
                  <p className="text-slate-300">
                    Tell me about your plugin idea and I'll get back to you with a detailed proposal.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          type="text"
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          type="text"
                          required
                          className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-white mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-3 py-2 text-white focus:border-emerald-500 focus:ring-emerald-500/20 focus:outline-none"
                        required
                      >
                        <option value="">Select project type</option>
                        <option value="custom-plugin">Custom Plugin Development</option>
                        <option value="plugin-modification">Plugin Modification</option>
                        <option value="server-setup">Server Setup & Configuration</option>
                        <option value="consultation">Technical Consultation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                        Budget Range (USD)
                      </label>
                      <select
                        id="budget"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-md px-3 py-2 text-white focus:border-emerald-500 focus:ring-emerald-500/20 focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Project Description
                      </label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
                        placeholder="Describe your plugin idea, required features, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Project Inquiry
                    </Button>
                    
                    <p className="text-xs text-slate-400 text-center">
                      I'll respond within 24 hours with a detailed proposal and timeline.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}