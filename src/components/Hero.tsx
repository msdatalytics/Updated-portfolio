import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(330,85%,60%,0.08)_0%,transparent_70%)]" />



      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 pt-20">
        {/* Profile Image - Now on the left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-2xl opacity-20 blur-2xl" />
            <img
              src={profileImg}
              alt="Sakshi Ankleshwariya"
              className="relative w-64 h-auto md:w-[20rem] lg:w-[22rem] rounded-2xl object-cover border-2 border-primary/30"
            />
          </div>
        </motion.div>

        {/* Content - Now on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary">Open to Opportunities</span>
          </motion.div>

          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-2">
            Hi, I'm{" "}
            <span className="text-gradient">Sakshi</span>
          </h1>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-gradient">Ankleshwariya</span>
          </h1>


          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Turning complex data into actionable insights. MS Data Science @ Indiana University Bloomington,
            specializing in Machine Learning, Data Visualization, and Business Intelligence.
          </p>


        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
