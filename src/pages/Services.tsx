import Layout from '@/components/layout/Layout';
import { Phone, Clock, Bed, Shield, Heart, Users, Utensils, Wifi, HandHeart, BookOpen, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bed,
    title: 'Comfortable Accommodation',
    description: 'Clean, well-maintained rooms ranging from budget-friendly non-AC options to premium AC rooms. All rooms are equipped with essential amenities for a comfortable and peaceful stay.',
    features: ['Clean Bedding', 'Attached Bathroom', 'Hot Water', 'Daily Housekeeping'],
  },
  {
    icon: Utensils,
    title: 'Satvik Food & Prasadam',
    description: 'We provide pure vegetarian satvik meals prepared with love and devotion. Fresh, hygienic, and nutritious food is served to all devotees as part of our seva to nourish both body and soul.',
    features: ['Pure Vegetarian', 'Fresh Prasadam', 'Hygienic Kitchen', 'Timely Meals'],
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Our dedicated staff is available round the clock to assist you with any needs. Early morning temple visits or late-night arrivals — we are always here to serve you.',
    features: ['24-Hour Reception', 'Night Security', 'Emergency Assistance', 'Flexible Check-in'],
  },
  {
    icon: Heart,
    title: 'Peaceful Spiritual Stay',
    description: 'Experience the divine atmosphere of Vrindavan. Our trust maintains a serene environment perfect for meditation, prayer, and spiritual contemplation.',
    features: ['Quiet Environment', 'Prayer Space', 'Spiritual Ambiance', 'Temple Proximity'],
  },
  {
    icon: HandHeart,
    title: 'Charitable Trust Services',
    description: 'As a registered charitable trust, we offer subsidized rates for genuine devotees and pilgrims. Our focus is on seva (service) rather than profit.',
    features: ['Subsidized Rates', 'Pilgrim Support', 'Group Accommodations', 'Charitable Activities'],
  },
  {
    icon: Users,
    title: 'Guest Assistance & Guidance',
    description: 'From temple darshan timings to local transportation, our knowledgeable staff helps you make the most of your pilgrimage in Vrindavan.',
    features: ['Temple Information', 'Local Guidance', 'Travel Assistance', 'Booking Help'],
  },
  {
    icon: Shield,
    title: 'Safe & Secure Environment',
    description: 'Your safety is our priority. We ensure a secure environment with proper safety measures and a trustworthy staff dedicated to your well-being.',
    features: ['Secure Premises', 'CCTV Surveillance', 'Safe Storage', 'Verified Staff'],
  },
  {
    icon: BookOpen,
    title: 'Spiritual Programs',
    description: 'Participate in daily aartis, bhajan sessions, and spiritual discourses organized by the trust. Connect with fellow devotees in a divine atmosphere.',
    features: ['Morning Aarti', 'Bhajan Sessions', 'Spiritual Talks', 'Festival Celebrations'],
  },
];

const trustHighlights = [
  { label: 'Years of Service', value: '10+' },
  { label: 'Devotees Served', value: '50,000+' },
  { label: 'Daily Meals', value: '200+' },
  { label: 'Rooms Available', value: '40+' },
];

const Services = () => {
  const whatsappMessage = encodeURIComponent(
    "Jai Shri Krishna! I would like to know more about the services at Vindravan Shri Giriraj Sewa Sadan Trust."
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-widest mb-4">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Seva with Devotion
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Vindravan Shri Giriraj Sewa Sadan Trust, we offer more than just accommodation. 
              We provide a complete spiritual hospitality experience — from comfortable rooms 
              to nourishing satvik meals — all designed to make your pilgrimage peaceful and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustHighlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2 font-serif">
                  {item.value}
                </div>
                <div className="text-primary-foreground/80 text-sm uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete Trust Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a comfortable and spiritually enriching stay in the holy dham of Vrindavan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary/50 p-6 rounded-2xl card-hover group border border-transparent hover:border-spiritual-yellow/20 hover:bg-secondary"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-spiritual-green flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Note Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-background p-8 md:p-12 rounded-2xl shadow-lg border border-border/50">
            <div className="flex items-start gap-6">
              <div className="hidden md:flex w-16 h-16 rounded-xl bg-gradient-to-br from-spiritual-yellow/20 to-spiritual-yellow/5 items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8 text-spiritual-yellow" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Commitment to Seva
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a charitable trust organization, our primary goal is to serve devotees 
                  visiting the holy dham of Vrindavan. We operate not for profit but for the 
                  spiritual benefit of pilgrims seeking blessings of Shri Radha Krishna.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  All our services — from comfortable accommodation to satvik meals, from 
                  spiritual programs to guest assistance — are provided with love, devotion, 
                  and the spirit of selfless service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
              Connect with us to learn more about our trust services or to make a booking 
              for your spiritual journey to Vrindavan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/919809802980?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 w-full sm:w-auto shadow-lg"
                >
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919809802980">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 w-full sm:w-auto bg-transparent"
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
