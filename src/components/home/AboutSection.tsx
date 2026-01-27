import { Heart, BookOpen, Users, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12">
          {/* Section Title */}
          <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-wider mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Welcome to Our Spiritual Abode
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-serif text-2xl text-foreground font-semibold">Vindravan Shri Giriraj Sewa Sadan</span> is a 
              sacred haven nestled in the holy city of Vrindavan, where devotion meets comfort. 
              Located just 600 meters from the magnificent Prem Mandir, our guest house offers 
              pilgrims and spiritual seekers a peaceful retreat during their divine journey.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded with the vision of serving devotees with love and care, we understand the 
              spiritual significance of Vrindavan and strive to provide an environment that 
              nurtures your soul while ensuring physical comfort. Our dedicated team works 
              around the clock to make your pilgrimage memorable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're here for darshan at the sacred temples, seeking spiritual solace, 
              or exploring the mystical lanes of Vrindavan, we welcome you with open hearts 
              and the warmth of true Indian hospitality.
            </p>
          </div>

          {/* Right - Values Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary p-6 rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-spiritual-yellow/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-spiritual-yellow" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To serve devotees with love, providing comfortable accommodation for their spiritual journey.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-spiritual-green/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-spiritual-green" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Devotion, service, cleanliness, and respect for all guests who visit our sacred abode.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-spiritual-red/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-spiritual-red" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Our Inspiration</h3>
              <p className="text-sm text-muted-foreground">
                Inspired by the divine teachings of Lord Krishna and the eternal love of Radha Rani.
              </p>
            </div>

            <div className="bg-secondary p-6 rounded-lg card-hover">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Our Promise</h3>
              <p className="text-sm text-muted-foreground">
                24/7 dedicated service ensuring your stay is as peaceful as the land of Vrindavan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
