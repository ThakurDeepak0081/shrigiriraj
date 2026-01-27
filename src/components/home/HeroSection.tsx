import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-temple.jpg';

const HeroSection = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a room at Vindravan Shri Giriraj Sewa Sadan. Please share the availability and rates."
  );

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
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6 opacity-0 animate-fade-in-up">
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          {/* Organization Name */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in-up delay-100">
            Vindravan Shri Giriraj
            <span className="block text-accent">Sewa Sadan</span>
          </h1>

          {/* Motto */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light opacity-0 animate-fade-in-up delay-200">
            Enjoy Your Stay in Our Hotel
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-300">
            Experience divine hospitality in the sacred land of Vrindavan. 
            Your peaceful spiritual retreat, just 600 meters from Prem Mandir.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 opacity-0 animate-fade-in-up delay-400">
            <a
              href={`https://wa.me/919809802980?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Your Stay
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 text-white/70 opacity-0 animate-fade-in-up delay-500">
            <a href="tel:+919809802980" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+91 98098 02980</span>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="tel:+918955807505" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={16} />
              <span>+91 89558 07505</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-in-up delay-500">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
