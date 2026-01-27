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
                <h3 className="font-serif text-lg font-bold">Vindravan Shri Giriraj</h3>
                <p className="text-sm text-primary-foreground/80">Sewa Sadan</p>
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
                href="tel:+919809802980"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 98098 02980</span>
              </a>
              <a
                href="tel:+918955807505"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+91 89558 07505</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="flex items-start gap-3 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>contact@girirajsewasadan.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Clock size={16} className="mt-0.5 flex-shrink-0" />
                <span>24 Hours Service Available</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Our Location</h4>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                Keshav Dham Rd, opp. Prem Dham,<br />
                adjoining Sukhdham, Chaitanya Vihar,<br />
                Vrindavan, Uttar Pradesh 281121
              </address>
            </div>
          </div>

          {/* Quick Links */}
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
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Vindravan Shri Giriraj Sewa Sadan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
