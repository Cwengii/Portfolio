import Hero from "@/components/Hero";
import About from "@/components/About";
import GetToKnowMe from "@/components/GetToKnowMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <About />
      <Projects />
      <GetToKnowMe />
      <Contact />
    </main>
  );
};

export default Index;
