import { motion } from "framer-motion";
import { Github, Lock } from "lucide-react";

const projects = [
  {
    title: "Project 990 – Philanthropic Intelligence",
    desc: "Data engineering and NLP-driven platform analyzing nonprofit grantmaking and philanthropic networks. Built feature pipelines, experimented with transformer models, and created dashboards for research insights.",
    highlights: ["Transformer-based NLP", "Feature Engineering Pipelines", "Causal Inference", "Data Storytelling"],
    tags: ["Python", "BERT/RoBERTa", "Hugging Face", "Tableau", "Plotly", "Prompt Engineering"],
    nda: true,
  },
  {
    title: "Transcripto.ai",
    desc: "AI-powered meeting assistant that transcribes, summarizes, extracts insights, and visualizes conversations. Built at Luddy Hackathon 2025.",
    highlights: ["Real-time transcription", "Sentiment Analysis", "Visual Insights"],
    tags: ["React", "Python", "OpenAI GPT-4", "Whisper"],
    githubFrontend: "https://github.com/dgb28/transcriptoAI-Frontend",
    githubBackend: "https://github.com/dgb28/transcriptoAI-Backend",
  },
  {
    title: "Traffic Sign Detection & Mapping",
    desc: "AI-based traffic sign detection model using YOLOv8 and OpenCV. Mapped results with GPS metadata to create ArcGIS shapefiles for roadway analytics.",
    highlights: ["1,400+ signs detected", "40+ miles processed", "GPS-tagged detections"],
    tags: ["Python", "YOLOv8", "OpenCV", "ArcGIS"],
    nda: true,
  },
  {
    title: "IndyGo Ridership Dashboard",
    desc: "Interactive Power BI dashboard analyzing 500K+ transit records to identify ridership trends and optimize scheduling.",
    highlights: ["500K+ records", "30% planning accuracy improvement"],
    tags: ["Power BI", "DAX", "SQL"],
    github: "https://github.com/msdatalytics/indygo-ridership-dashboard",
  },
  {
    title: "AmEx Default Prediction",
    desc: "Machine learning model for predicting credit defaults with 30% accuracy improvement and 50% pipeline runtime reduction.",
    highlights: ["40% processing time reduction", "SHAP analysis", "ROC/AUC optimization"],
    tags: ["Python", "Pandas", "SQL", "Scikit-learn"],
    github: "https://github.com/msdatalytics/AmEx-Default-Prediction",
  },
  {
    title: "Hollywood Profitable Stories",
    desc: "Visualizing Hollywood's most profitable stories using Tableau. Analyzes 74 films across 13 studios and 6 genres.",
    highlights: ["Tableau Dashboard", "Profitability Analysis", "Data Storytelling"],
    tags: ["Tableau", "Data Visualization", "Excel"],
    github: "https://github.com/msdatalytics/hollywood-profitable-stories",
  },
  {
    title: "Smart Approval System",
    desc: "Automated ERP workflows with recalibrated SQL queries, improving financial data processing efficiency and reducing storage costs.",
    highlights: ["35% faster reporting", "12% storage cost reduction"],
    tags: ["SQL", "ERP Automation", "AWS S3"],
    nda: true,
  },
  {
    title: "Excel Habit Tracker",
    desc: "A self-built Excel habit tracker with daily tracking, auto-calculated completion percentages, dynamic sorting, progress bars, and a simple dashboard view.",
    highlights: ["Auto-calculated completion %", "Dynamic Sorting", "Dashboard View"],
    tags: ["Microsoft Excel", "COUNTIF", "VLOOKUP", "Conditional Formatting"],
    github: "https://github.com/msdatalytics/Excel-Habit-Tracker",
  },
];

const Projects = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          A selection of data science and machine learning projects
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-6 flex flex-col group hover:border-primary/40 transition-colors"
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.highlights.map((h) => (
                <span key={h} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-auto">
              {p.githubFrontend && (
                <a
                  href={p.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> Frontend Repository
                </a>
              )}
              {p.githubBackend && (
                <a
                  href={p.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> Backend Repository
                </a>
              )}
              {p.github && !p.githubFrontend && !p.githubBackend && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github size={14} /> View on GitHub
                </a>
              )}
              {!p.github && !p.githubFrontend && !p.githubBackend && (
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock size={14} /> NDA Protected
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
