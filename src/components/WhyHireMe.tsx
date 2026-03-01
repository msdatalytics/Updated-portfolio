import { motion } from "framer-motion";
import { Briefcase, Code, BarChart, Search, Zap } from "lucide-react";

const reasons = [
    {
        icon: Briefcase,
        title: "Bridge Between Data & Business Strategy",
        description: "Experience as an Oracle ERP Consultant and BI Analyst allows for translating complex data into actionable financial and operational insights.",
    },
    {
        icon: Code,
        title: "End-to-End ML & NLP Expertise",
        description: "Proven track record in building production-ready pipelines, from YOLOv8 computer vision for GIS to Transformer-based NLP models for philanthropic research.",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics & Visualization",
        description: "Expert in Power BI, Tableau, and Excel, having delivered dashboards that improved planning accuracy by 30% and cut reporting latency by 99%.",
    },
    {
        icon: Search,
        title: "Research-Driven Problem Solver",
        description: "Strong academic background (MS in Data Science) combined with real-world application in causal inference, feature engineering, and LLM experimentation.",
    },
    {
        icon: Zap,
        title: "Operational Efficiency Focus",
        description: "Demonstrated ability to automate workflows (reducing manual work by 60%) and optimize data processing (35% faster reporting) using SQL, Python, and AWS.",
    },
];

const WhyHireMe = () => (
    <section id="why-hire-me" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Why <span className="text-gradient">Hire Me?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Combining deep technical expertise in AI/ML with a sharp business perspective to deliver measurable impact.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reasons.map((reason, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glass rounded-2xl p-8 hover:border-primary/40 transition-all group ${i === reasons.length - 1 && reasons.length % 3 !== 0 ? "lg:col-span-1 lg:translate-x-[50%]" : ""
                            } ${reasons.length === 5 && i >= 3 ? "lg:col-span-1 lg:translate-x-[50%]" : ""}`}
                        // Adjusting grid layout for 5 items to look balanced
                        style={{
                            gridColumn: i >= 3 && reasons.length === 5 ? "span 1" : undefined,
                            // Special centering for the last two on large screens
                            marginLeft: i === 3 && reasons.length === 5 ? "50%" : undefined,
                            marginRight: i === 4 && reasons.length === 5 ? "-50%" : undefined,
                        }}
                    >
                        {/* Cleaner grid logic: just rely on simple grid or custom classes */}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

// Better implementation of the grid for 5 items
const WhyHireMeImproved = () => (
    <section id="why-hire-me" className="py-24 relative overflow-hidden bg-secondary/5">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Why <span className="text-gradient">Hire Me?</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Combining deep technical expertise in AI/ML with a sharp business perspective to deliver measurable impact.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
                {reasons.map((reason, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass rounded-2xl p-8 hover:border-primary/40 transition-all group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm flex flex-col items-center text-center"
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br from-primary/20 to-transparent border border-primary/20">
                            <reason.icon className="text-primary group-hover:animate-pulse-glow" size={28} />
                        </div>
                        <h3 className="font-heading font-bold text-xl mb-4 text-foreground group-hover:text-primary transition-colors h-[3.5rem] flex items-center">
                            {reason.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {reason.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default WhyHireMeImproved;
