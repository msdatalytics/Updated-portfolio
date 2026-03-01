import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Data Analysis & Visualization",
    skills: ["Power BI (DAX, Power Query)", "Tableau", "Excel (Advanced)", "Data Cleaning", "KPI Development", "Data Storytelling"],
  },
  {
    title: "Languages & Databases",
    skills: ["Python", "R", "PL/SQL", "PostgreSQL", "MySQL", "MongoDB", "Snowflake", "PySpark"],
  },
  {
    title: "Machine Learning",
    skills: ["Supervised & Unsupervised Learning", "Regression & Classification", "Feature Engineering", "A/B Testing", "Scikit-learn", "Model Evaluation"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL Pipeline Design", "Databricks", "Apache Airflow", "dbt", "CI/CD", "Workflow Orchestration"],
  },
  {
    title: "ERP & Business Intelligence",
    skills: ["Oracle Cloud ERP", "OTBI", "BI Publisher", "SAP", "Supply Chain Analytics", "Process Optimization"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, RDS)", "Git & GitHub", "Docker", "Streamlit", "Selenium", "Beautiful Soup"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          A comprehensive toolkit for data science, analytics, and business intelligence
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-heading font-semibold text-foreground mb-4">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
