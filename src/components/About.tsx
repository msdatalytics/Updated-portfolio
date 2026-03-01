import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Education", value: "MS Data Science" },
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: Award, label: "GPA", value: "3.9 / 4.0" },
];

const About = () => (
  <section id="about" className="py-24 relative flex justify-center">
    <div className="container mx-auto px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-center">
          I'm a Data Scientist and BI Analyst with 3+ years of industry experience transforming raw data into strategic decisions. 
          From engineering YOLOv8 computer vision pipelines at Fenstermaker to building 17+ Oracle ERP dashboards at Mastek, 
          I bridge the gap between technical complexity and business impact. My work spans machine learning, ETL pipelines, 
          and interactive data visualization — always with a focus on measurable outcomes. Currently pursuing my MS in Data Science 
          at Indiana University Bloomington (GPA: 3.9), I thrive where analytical rigor meets creative problem-solving.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 text-center"
          >
            <s.icon className="mx-auto mb-3 text-primary" size={24} />
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
            <p className="font-heading font-semibold text-foreground">{s.value}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
