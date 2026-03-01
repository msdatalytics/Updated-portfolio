import { motion } from "framer-motion";

const education = [
  { degree: "Master's in Data Science", school: "Indiana University Bloomington", year: "2024 - 2026" },
  { degree: "MBA in Information Systems", school: "NMIMS, India", year: "2022 - 2024" },
  { degree: "B.Tech in Computer Engineering", school: "Nirma University, India", year: "2018 - 2022" },
];

const Education = () => (
  <section id="education" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-2"
            >
              <div>
                <p className="font-semibold text-foreground">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
              </div>
              <span className="text-sm text-primary font-medium">{e.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
