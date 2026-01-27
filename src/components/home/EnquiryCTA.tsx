import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EnquiryCTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to book a room at Vindravan Shri Giriraj Sewa Sadan. Please share the availability and rates."
  );

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-spiritual-yellow rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Spiritual Journey?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book your stay at Vindravan Shri Giriraj Sewa Sadan and experience 
            divine hospitality in the heart of Vrindavan.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/919809802980?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-spiritual-green text-white hover:bg-spiritual-green/90 text-lg px-8 py-6 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Booking
              </Button>
            </a>
            <a href="tel:+919809802980">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
            <a href="mailto:contact@girirajsewasadan.com">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-10 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+919809802980"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>+91 98098 02980</span>
              </a>
              <a
                href="tel:+918955807505"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={18} />
                <span>+91 89558 07505</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryCTA;
