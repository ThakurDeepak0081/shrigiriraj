import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Twitter, Youtube } from 'lucide-react';
import LegalModal from '@/components/modals/LegalModal';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Shree Giriraj Sewa Sadan</h3>
                <p className="text-sm text-primary-foreground/80">Seva with Devotion</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Experience divine hospitality in the sacred land of Vrindavan. 
              Your peaceful spiritual retreat awaits.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919927600017"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00017</span>
              </a>
              <a
                href="tel:+919927600019"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00019</span>
              </a>
              <a
                href="tel:+919927600029"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 99276 00029</span>
              </a>
              <a
                href="mailto:girirajsewasadan@gmail.com"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>girirajsewasadan@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>24 Hours Service Available</span>
              </div>
            </div>
          </div>

          {/* Vrindavan Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Vrindavan Location</h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                Keshav Dham Road,<br />
                In front of Prem Mandir,<br />
                Shri Vrindavan - 281121
              </address>
            </div>
            
            {/* Registered Office */}
            <div className="pt-4 border-t border-primary-foreground/10">
              <p className="text-xs text-primary-foreground/60 font-medium mb-2">Founder & Operator</p>
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                Shri Giriraj Seva Sadan (Reg. - 82)<br />
                Kothi No. 21, Green Avenue,<br />
                Baranala – 148101
              </p>
            </div>
          </div>

          {/* Quick Links & Map */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
              <LegalModal type="privacy">
                <button className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </button>
              </LegalModal>
              <LegalModal type="terms">
                <button className="block text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms & Conditions
                </button>
              </LegalModal>
            </nav>
          </div>
        </div>

        {/* Google Map for Baranala Headquarters */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <h4 className="font-serif text-lg font-semibold mb-4 text-center">Registered Office - Baranala</h4>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27539.76428287831!2d75.53686!3d30.37499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391019f9c29b0a1d%3A0x4ed7b61a9c9b0a1d!2sGreen%20Avenue%2C%20Barnala%2C%20Punjab%20148101!5e0!3m2!1sen!2sin!4v1706500000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Giriraj Seva Sadan - Baranala Headquarters"
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Shree Giriraj Sewa Sadan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
