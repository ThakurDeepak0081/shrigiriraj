import { Heart, BookOpen, Users, Star, Sparkles } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Section Title */}
          <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-widest mb-4">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to Our Spiritual Abode
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="relative">
              <Sparkles className="absolute -left-8 -top-4 w-6 h-6 text-spiritual-yellow/50" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-serif text-2xl text-foreground font-semibold block mb-3">
                  Vindravan Shri Giriraj Sewa Sadan
                </span> 
                is a registered charitable trust organization dedicated to serving devotees 
                in the holy city of Vrindavan. Located just 600 meters from the magnificent 
                Prem Mandir, our trust provides pilgrims and spiritual seekers a peaceful 
                retreat during their divine journey.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Founded with the vision of selfless service (seva), we understand the 
              spiritual significance of Vrindavan and strive to provide an environment that 
              nurtures your soul while ensuring physical comfort. Our trust operates round 
              the clock to serve devotees with love and devotion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're here for darshan at the sacred temples, seeking spiritual solace, 
              or exploring the mystical lanes of Vrindavan, we welcome you with open hearts 
              and the warmth of true Indian hospitality — all in the spirit of charitable service.
            </p>
            
            {/* Trust Highlight */}
            <div className="bg-gradient-to-r from-spiritual-yellow/10 to-transparent p-6 rounded-xl border-l-4 border-spiritual-yellow">
              <p className="text-foreground font-medium italic">
                "As a trust organization, we are committed to serving humanity through 
                accommodation, food, and spiritual guidance — embodying the essence of seva."
              </p>
            </div>
          </div>

          {/* Right - Values Cards */}
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-secondary p-6 rounded-2xl card-hover group border border-transparent hover:border-spiritual-yellow/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spiritual-yellow/20 to-spiritual-yellow/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-spiritual-yellow" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To serve devotees selflessly, providing comfortable accommodation and nourishing 
                meals for their spiritual journey.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-2xl card-hover group border border-transparent hover:border-spiritual-green/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spiritual-green/20 to-spiritual-green/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7 text-spiritual-green" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Values</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Devotion, service, cleanliness, and respect for all guests who visit our 
                sacred charitable abode.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-2xl card-hover group border border-transparent hover:border-spiritual-red/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-spiritual-red/20 to-spiritual-red/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Star className="w-7 h-7 text-spiritual-red" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Inspiration</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Inspired by the divine teachings of Lord Krishna and the eternal love 
                of Radha Rani.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-2xl card-hover group border border-transparent hover:border-primary/30">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Our Promise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                24/7 dedicated service ensuring your stay is as peaceful as the 
                land of Vrindavan itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
