import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: 'Spacious Lawn Area',
    description: 'A beautifully maintained green lawn where devotees can sit peacefully, practice meditation, or gather for spiritual discussions in a serene natural environment.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
  },
  {
    id: 2,
    name: 'Secure Parking Facility',
    description: 'Safe and spacious parking area for cars, bikes, and buses. Our 24/7 security ensures your vehicles are protected throughout your stay.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600&q=80',
  },
  {
    id: 3,
    name: 'Beautiful Garden',
    description: 'A tranquil garden adorned with flowers and sacred Tulsi plants, offering devotees a peaceful space for morning walks and evening prayers.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
  },
  {
    id: 4,
    name: 'Trust Compound',
    description: 'Our well-maintained compound provides a safe and clean environment for families and groups. The entire premises is kept spotless for devotee comfort.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
  },
  {
    id: 5,
    name: 'Satvik Food Service',
    description: 'Pure vegetarian meals prepared with love and devotion. Our kitchen serves fresh, hygienic satvik food following traditional recipes blessed for spiritual nourishment.',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
  },
  {
    id: 6,
    name: 'Prasadam Distribution',
    description: 'Daily prasadam is offered to all guests as a sacred blessing. Experience the divine taste of food offered to the Lord with pure devotion.',
    image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80',
  },
  {
    id: 7,
    name: 'Clean Accommodation Rooms',
    description: 'Simple, clean, and comfortable rooms designed for restful sleep. Each room is regularly cleaned and maintained with fresh linens and basic amenities.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
  },
  {
    id: 8,
    name: 'Common Sitting Area',
    description: 'Comfortable common areas where devotees can gather, share spiritual experiences, and build connections with fellow pilgrims from across the country.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  },
  {
    id: 9,
    name: 'Water & Refreshment Station',
    description: 'Clean drinking water and refreshments available 24/7. Stay hydrated during your pilgrimage with purified RO water at multiple points.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80',
  },
  {
    id: 10,
    name: 'Reception & Assistance',
    description: 'Friendly staff available round the clock to assist with bookings, local guidance, temple timings, and any help you need during your spiritual journey.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',
  },
  {
    id: 11,
    name: 'Morning Aarti Space',
    description: 'Dedicated space for morning and evening aarti where devotees can participate in daily prayers and experience the divine atmosphere of Vrindavan.',
    image: 'https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?w=600&q=80',
  },
  {
    id: 12,
    name: 'Family-Friendly Environment',
    description: 'A welcoming atmosphere suitable for families with children and elderly members. Our trust ensures everyone feels at home during their pilgrimage.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
];

const Gallery = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Our Facilities
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Trust Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-spiritual-green to-primary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              Explore our trust facilities designed to make your spiritual stay 
              in Vrindavan comfortable, peaceful, and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-secondary rounded-xl overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Need More Information */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
                href={`https://wa.me/919809802980?text=${encodeURIComponent("Jai Shri Krishna! I would like to know more about booking a room at Vindravan Shri Giriraj Sewa Sadan Trust.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-spiritual-green text-white hover:bg-spiritual-green/90 text-lg px-8 py-6 w-full sm:w-auto shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
              </a>
              <a href="tel:+919809802980">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 w-full sm:w-auto"
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

export default Gallery;
