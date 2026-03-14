import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, X, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
    {
        name: "Associate Data Analyst",
        issuer: "DataCamp",
        date: "Feb 2026",
        color: "from-emerald-400 to-teal-500",
        icon: "📊",
        image: "/certificates/da_associate.png",
    },
    {
        name: "Associate Data Engineer",
        issuer: "DataCamp",
        date: "Nov 2025",
        color: "from-blue-400 to-cyan-500",
        icon: "⚙️",
        image: "/certificates/de_associate_badge.png",
    },
    {
        name: "Oracle Fusion Cloud Applications HCM Process",
        issuer: "Oracle",
        date: "Nov 2025",
        color: "from-red-400 to-orange-500",
        icon: "☁️",
        image: "/certificates/oracle_hcm.jpg",
    },
    {
        name: "Introduction To Snowflake",
        issuer: "DataCamp",
        date: "Oct 2024",
        color: "from-cyan-300 to-blue-500",
        icon: "❄️",
        image: "/certificates/snowflake.jpeg",
    },
    {
        name: "Oracle Certified Foundations Associate",
        issuer: "Oracle",
        date: "Sep 2023",
        color: "from-amber-400 to-orange-500",
        icon: "🏅",
        image: "/certificates/oracle_foundations.jpeg",
    },
    {
        name: "LetsGrowMore Summer of Code 2021",
        issuer: "LetsGrowMore",
        date: "Aug 2021",
        color: "from-yellow-400 to-amber-500",
        icon: "🏆",
        image: "/certificates/lets_grow_more.jpeg",
    },
    {
        name: "AnitaB.org Open Source Day",
        issuer: "AnitaB.org",
        date: "Jul 2021",
        color: "from-pink-400 to-purple-500",
        icon: "🌐",
        image: "/certificates/open_source.jpeg",
    },

];

interface Cert {
    name: string;
    issuer: string;
    date: string;
    color: string;
    icon: string;
    image?: string;
    credentialUrl?: string;
}

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState<Cert | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -containerWidth : containerWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                        Licenses & <span className="text-gradient">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground mb-12">
                        Professional credentials validating expertise across data, cloud,
                        and engineering domains
                    </p>
                </motion.div>

                {/* Slider wrapper */}
                <div className="relative group/slider">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-foreground hover:text-primary p-2.5 rounded-full shadow-xl opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/50 text-foreground hover:text-primary p-2.5 rounded-full shadow-xl opacity-0 group-hover/slider:opacity-100 transition-all duration-300 hover:scale-110"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-[5] pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-[5] pointer-events-none" />

                    {/* Scrollable track */}
                    <div
                        ref={scrollRef}
                        className="flex gap-5 overflow-x-auto scrollbar-hide px-4 py-2 snap-x snap-mandatory"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="group relative cursor-pointer flex-shrink-0 snap-start w-[calc((100%-2.5rem)/3)]"
                                style={{ minWidth: "280px" }}
                                onClick={() => {
                                    if (cert.image) {
                                        setSelectedCert(cert);
                                    } else if (cert.credentialUrl) {
                                        window.open(cert.credentialUrl, "_blank");
                                    }
                                }}
                            >
                                {/* Glow border on hover */}
                                <div
                                    className={`absolute -inset-[1px] rounded-xl bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`}
                                />

                                <div className="relative glass rounded-xl p-5 h-full flex flex-col justify-between overflow-hidden">
                                    {/* Subtle gradient accent at top */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.color} opacity-60`}
                                    />

                                    {/* Certificate thumbnail preview */}
                                    {cert.image && (
                                        <div className="relative mb-3 rounded-lg overflow-hidden bg-secondary/50 aspect-[16/10]">
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                                            <div className="absolute bottom-2 right-2 bg-primary/90 text-primary-foreground rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Eye className="w-3 h-3" />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <div className="flex items-start justify-between mb-2">
                                            <span className="text-xl">{cert.icon}</span>
                                            <Award className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>

                                        <h3 className="font-heading font-semibold text-sm leading-snug text-foreground mb-2 group-hover:text-white transition-colors">
                                            {cert.name}
                                        </h3>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-1.5 mb-2">
                                            <span
                                                className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}
                                            />
                                            <span className="text-xs text-muted-foreground font-medium">
                                                {cert.issuer}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {cert.date}
                                            </span>

                                            {cert.image && (
                                                <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Eye className="w-3 h-3" />
                                                    View
                                                </span>
                                            )}

                                            {!cert.image && cert.credentialUrl && (
                                                <span className="text-xs text-primary flex items-center gap-1">
                                                    Credential ↗
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator dots */}
                <div className="flex justify-center gap-1.5 mt-6">
                    {certifications.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                if (scrollRef.current) {
                                    const scrollAmount = i * 320;
                                    scrollRef.current.scrollTo({
                                        left: scrollAmount,
                                        behavior: "smooth",
                                    });
                                }
                            }}
                            className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary/70 transition-colors"
                        />
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedCert(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                        {/* Modal content */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{selectedCert.icon}</span>
                                    <div>
                                        <h3 className="font-heading font-semibold text-lg text-white">
                                            {selectedCert.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {selectedCert.issuer} • {selectedCert.date}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Image */}
                            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-card">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.name}
                                    className="w-full h-auto max-h-[75vh] object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
