import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Engineer",
    company: "Indiana University Bloomington – Project 990",
    location: "Bloomington, USA",
    period: "Aug 2025 - Present",
    bullets: [
      "Designed feature engineering pipelines for nonprofit organizations using structured and unstructured data",
      "Experimented with transformer-based models (BERT/RoBERTa) for entity and semantic feature extraction",
      "Explored prompt engineering and LLM fine-tuning for domain-specific NLP tasks",
      "Developed data visualizations using Tableau and Plotly for stakeholder insights",
      "Researched causal inference techniques to analyze grant effectiveness",
    ],
    tags: ["Python", "NLP", "Hugging Face", "Tableau", "Feature Engineering", "Data Pipelines"],
  },
  {
    role: "GIS ML Intern",
    company: "Fenstermaker",
    location: "Lafayette, USA",
    period: "Sep 2025 - Dec 2025",
    bullets: [
      "Engineered a YOLOv8-based computer vision pipeline detecting 1,400+ MUTCD signs from roadway survey videos",
      "Processed 40+ miles of geospatial footage and integrated GPS-tagged detections into ArcGIS",
      "Orchestrated video-to-map workflows using GeoPandas/Pandas, reducing quality-check time by 50%",
    ],
    tags: ["YOLOv8", "Python", "OpenCV", "ArcGIS", "GeoPandas"],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "Indiana University Bloomington",
    location: "Bloomington, USA",
    period: "Aug 2025 - Dec 2025",
    bullets: [
      "Guided 40+ graduate students through SQL, Arrow, Snowflake, and Neo4j coursework",
      "Delivered weekly workshops on Snowflake, MySQL optimization, and Neo4j",
    ],
    tags: ["SQL", "Snowflake", "Neo4j", "Teaching"],
  },
  {
    role: "Operational Support Intern",
    company: "Finetune",
    location: "Chicago, USA",
    period: "May 2025 - Aug 2025",
    bullets: [
      "Streamlined reporting for 50K+ utility records using Power BI, VBA, and Python, eliminating 8+ hours/week",
      "Optimized workflow efficiency by 25% through pipeline enhancements and KPI redesign",
      "Developed DAX/Power Query dashboards surfacing operational and spending insights",
    ],
    tags: ["Power BI", "VBA", "Python", "DAX"],
  },
  {
    role: "Research Assistant",
    company: "Indiana University Bloomington",
    location: "Bloomington, USA",
    period: "Jan 2025 - May 2025",
    bullets: [
      "Prepared a 2,000+ case file database for the Indiana Innocence Project using SQL and Power BI",
      "Streamlined case selection by 35% and delivered actionable insights",
    ],
    tags: ["SQL", "Power BI", "Data Analysis"],
  },
  {
    role: "Oracle Tech ERP Consultant",
    company: "Mastek",
    location: "Ahmedabad, India",
    period: "Jan 2022 - Aug 2024",
    bullets: [
      "Built 17+ Oracle ERP dashboards with BI Publisher, OTBI, and VBA, cutting latency by 99%",
      "Automated cross-functional reporting workflows, reducing manual work by 60%",
      "Collaborated with finance/procurement & supply chain teams to define KPIs and deliver executive insights",
    ],
    tags: ["Oracle ERP", "BI Publisher", "OTBI", "VBA"],
  },
];

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          A journey through data science, business intelligence, and machine learning
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative"
          >
            {/* Hover glow border */}
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/40 to-purple-500/40 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

            <div className="relative glass rounded-xl p-6 h-full flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap bg-secondary px-3 py-1 rounded-full self-start">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mb-4 flex-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                {exp.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
