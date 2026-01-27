import Layout from '@/components/layout/Layout';
import { Phone, Clock, Bed, Shield, Heart, Users, Utensils, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bed,
    title: 'Comfortable Accommodation',
    description: 'Clean, well-maintained rooms ranging from budget-friendly non-AC options to premium AC rooms. All rooms are equipped with essential amenities for a comfortable stay.',
    features: ['Clean Bedding', 'Attached Bathroom', 'Hot Water', 'Daily Housekeeping'],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our dedicated staff is available round the clock to assist you with any needs. Early morning temple visits or late-night arrivals - we\'re always here for you.',
    features: ['24-Hour Reception', 'Night Security', 'Emergency Assistance', 'Flexible Check-in'],
  },
  {
    icon: Heart,
    title: 'Peaceful Spiritual Stay',
    description: 'Experience the divine atmosphere of Vrindavan. Our guest house maintains a serene environment perfect for meditation, prayer, and spiritual contemplation.',
    features: ['Quiet Environment', 'Prayer Space', 'Spiritual Ambiance', 'Temple Proximity'],
  },
  {
    icon: Users,
    title: 'Guest Assistance',
    description: 'From temple darshan timings to local transportation, our knowledgeable staff helps you make the most of your pilgrimage in Vrindavan.',
    features: ['Temple Information', 'Local Guidance', 'Travel Assistance', 'Booking Help'],
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your safety is our priority. We ensure a secure environment with proper safety measures and a trustworthy staff.',
    features: ['Secure Premises', 'CCTV Surveillance', 'Safe Storage', 'Verified Staff'],
  },
  {
    icon: Utensils,
    title: 'Nearby Dining Options',
    description: 'Multiple vegetarian restaurants and satvik food outlets are available within walking distance for pure, devotional meals.',
    features: ['Satvik Food Nearby', 'Pure Vegetarian', 'Prasad Available', 'Tea/Coffee Service'],
  },
];

const Services = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about your services at Vindravan Shri Giriraj Sewa Sadan."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hospitality with Devotion
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              At Vindravan Shri Giriraj Sewa Sadan, we offer more than just accommodation. 
              We provide a complete spiritual hospitality experience designed to make your 
              pilgrimage peaceful and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-xl card-hover group"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Contact us to learn more about our services or to make a booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919809802980?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 w-full sm:w-auto"
                >
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919809802980">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 w-full sm:w-auto bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
