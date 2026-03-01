import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhyHireMe from "@/components/WhyHireMe";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <WhyHireMe />
    <Education />
    <Contact />
  </main>
);

export default Index;
