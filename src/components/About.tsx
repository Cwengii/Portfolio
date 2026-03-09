const About = () => {
  const skills = [
    "React / Next.js",
    "TypeScript",
    "Node.js",
    "Three.js",
    "Figma",
    "After Effects",
    "Blender",
    "Skateboarding",
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// About</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            CODE.<br />CREATE.<br />SKATE.
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-8">
            I'm a creative developer who lives at the intersection of technology and street culture. 
            By day, I build digital experiences that push boundaries. By evening, I'm at the skatepark 
            finding new lines. Both worlds feed the same obsession: the pursuit of something that feels 
            effortless but takes everything to achieve.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs uppercase tracking-wider border border-border px-3 py-1.5 text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
