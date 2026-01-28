import heroImage from '@/assets/hero-temple.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Spiritual temple in Vrindavan"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-overlay" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative Element */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          {/* Organization Name */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up delay-100 tracking-tight">
            Vindravan Shri Giriraj
            <span className="block text-accent mt-2">Sewa Sadan</span>
          </h1>

          {/* Subtitle - Trust Identity */}
          <div className="opacity-0 animate-fade-in-up delay-200">
            <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-sm md:text-base font-medium tracking-widest uppercase backdrop-blur-sm bg-white/5">
              A Charitable Trust Organization
            </span>
          </div>

          {/* Motto */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-0 animate-fade-in-up delay-300 font-serif italic">
            "Serving Devotees with Love & Devotion"
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-400 leading-relaxed">
            Experience divine hospitality in the sacred land of Vrindavan. 
            Your peaceful spiritual retreat, just 600 meters from Prem Mandir.
          </p>

          {/* Decorative Bottom Element */}
          <div className="flex justify-center pt-8 opacity-0 animate-fade-in-up delay-500">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent text-2xl">🙏</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
