import interest1 from "@/assets/interest-1.jpg";
import interest2 from "@/assets/interest-2.jpg";
import interest3 from "@/assets/interest-3.jpg";

const GetToKnowMe = () => {
  const interests = [
    { title: "Follower of Christ", emoji: "🛐", description: "When I am not coding and exploring the latest technologies, you will find me at church serving." },
    { title: "Gamer", emoji: "🎮", description: "Exploring the latest games or probably beating someone in a game" },
    { title: "Creative Mind", emoji: "🎨", description: "Bringing ideas to life through photography and video editing" },
    { title: "Problem Solver", emoji: "🧩", description: "Love a good challenge" },
    { title: "Tech Enthusiast", emoji: "💻", description: "Exploring the latest technologies and building new projects" },
    { title: "Music Lover", emoji: "🎵", description: "Building playlists and listening to new music" },
    { title: "Skateboarder", emoji: "🛹", description: "Always skating and finding new lines" },
    { title: "Anime/Manga Lover", emoji: "🎥", description: "Watching anime and reading manga" },
  ];

  return (
    <section id="know-me" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Beyond the Code</p>
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-foreground mb-16">WHO IS ACWENGILE MORRIS ?</h2>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {interests.map((interest, i) => (
            <div
              key={interest.title}
              className="border border-border p-4 sm:p-6 hover:border-primary transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl mb-3">{interest.emoji}</div>
              <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">{interest.title}</h3>
              <p className="font-mono text-xs text-muted-foreground">{interest.description}</p>
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="md:col-span-2 overflow-hidden border border-border h-48 sm:h-64">
            <img src={interest1} alt="My interests" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden border border-border h-48 sm:h-64">
            <img src={interest2} alt="My hobbies" className="w-full h-full object-cover" />
          </div>
          <div className="overflow-hidden border border-border h-48 sm:h-64">
            <img src={interest3} alt="My lifestyle" className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 border border-border p-6 sm:p-8 flex items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-4">Life Outside Code</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new creative spots, serving at church, and gaming or probably watching anime. 
                I believe in balance—pushing boundaries in tech while staying grounded in the things that inspire me.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="border border-border p-6 sm:p-8">
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-6">Quick Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
            <div>
              <span className="text-primary">// Favorite Quote:</span>
              <p className="text-muted-foreground mt-1">"Have faith as small as a mustard seed :)"</p>
            </div>
            <div>
              <span className="text-primary">// Current Obsession:</span>
              <p className="text-muted-foreground mt-1">Cybersecurity</p>
            </div>
            <div>
              <span className="text-primary">// Superpower:</span>
              <p className="text-muted-foreground mt-1">Turning ideas into reality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetToKnowMe;
