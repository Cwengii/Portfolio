import heroImg from "@/assets/hero-skate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Skater performing a kickflip at night with neon lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24">
        <p className="font-mono text-sm tracking-widest uppercase text-primary mb-4 animate-fade-up">
          Software & Data Engineer / Creator
        </p>
        <h1 className="font-display text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] tracking-tight text-foreground">
          Hi, I'm
          <br />
          <span className="text-stroke">Acwengile Morris !</span>
          <br />
          A Software & Data Engineer
        </h1>
        <div className="mt-8 flex gap-6 items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <a
            href="#work"
            className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors glitch-hover"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="font-mono text-sm uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Contact
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            CV
          </a>
          <a
            href="#know-me"
            className="font-mono text-sm uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Get To Know Acwengile
          </a>
        </div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-border overflow-hidden py-3">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="font-display text-2xl text-muted-foreground mx-8">
              CREATIVE CODE • UI/UX DESIGN • FULL STACK DEV • Data •  ART • CREATIVE CODE • UI/UX DESIGN • FULL STACK DEV • Security • STREET ART • CREATIVE CODE • UI/UX DESIGN • FULL STACK DEV • Data •  ART • CREATIVE CODE • UI/UX DESIGN • FULL STACK DEV • Security • STREET ART •{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
