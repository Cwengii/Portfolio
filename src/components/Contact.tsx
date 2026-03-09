const Contact = () => {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Contact</p>
        <h2 className="font-display text-5xl md:text-8xl lg:text-9xl text-foreground mb-12">
          LET'S<br />
          <span className="text-stroke">CONNECT</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            Got a project in mind? Want to collaborate on something wild? 
            Or just want to talk about the best skate spots? Hit me up.
          </p>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between border-b border-border pb-4 hover:border-primary transition-colors"
              >
                <span className="font-mono text-sm uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </span>
                <span className="font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 — Built with code & concrete
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Designed & developed by me
        </p>
      </div>
    </section>
  );
};

export default Contact;
