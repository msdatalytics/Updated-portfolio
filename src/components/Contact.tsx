import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about data science
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a href="mailto:sakshibarot123@gmail.com" className="glass rounded-xl p-6 hover:border-primary/40 transition-colors group">
            <Mail className="mx-auto mb-3 text-primary" size={24} />
            <p className="text-xs text-muted-foreground mb-1">Email</p>
            <p className="text-sm text-foreground group-hover:text-primary transition-colors">sakshibarot123@gmail.com</p>
          </a>
          <a href="tel:+19309044950" className="glass rounded-xl p-6 hover:border-primary/40 transition-colors group">
            <Phone className="mx-auto mb-3 text-primary" size={24} />
            <p className="text-xs text-muted-foreground mb-1">Phone</p>
            <p className="text-sm text-foreground group-hover:text-primary transition-colors">+1 (930) 904-4950</p>
          </a>
        </div>

        <div className="glass rounded-xl p-6 mb-10 inline-flex items-center gap-3">
          <MapPin className="text-primary" size={20} />
          <span className="text-muted-foreground">Bloomington, Indiana, USA</span>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/msdatalytics" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-ankleshwariya/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sakshibarot123@gmail.com" className="p-4 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-muted-foreground">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>

    <div className="text-center mt-16 pb-8">
      <p className="text-xs text-muted-foreground">
        © 2026 Sakshi Ankleshwariya. All rights reserved.
      </p>
    </div>
  </section>
);

export default Contact;
