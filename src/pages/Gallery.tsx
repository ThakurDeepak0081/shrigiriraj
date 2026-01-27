import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Phone, Users, Wind, Snowflake } from 'lucide-react';

type RoomCategory = 'all' | 'non-ac' | 'ac' | 'multi';

interface Room {
  id: number;
  name: string;
  category: 'non-ac' | 'ac' | 'multi';
  hasAC: boolean;
  bedType: string;
  capacity: number;
  description: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Non-AC Room',
    category: 'non-ac',
    hasAC: false,
    bedType: 'Single Bed',
    capacity: 2,
    description: 'A comfortable budget-friendly room with essential amenities, perfect for solo travelers or couples seeking a simple stay.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
  },
  {
    id: 2,
    name: 'Deluxe Non-AC Room',
    category: 'non-ac',
    hasAC: false,
    bedType: 'Double Bed',
    capacity: 3,
    description: 'Spacious non-AC room with a comfortable double bed and attached bathroom. Ideal for small families.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=80',
  },
  {
    id: 3,
    name: 'Double Bed AC Room',
    category: 'ac',
    hasAC: true,
    bedType: 'Double Bed',
    capacity: 2,
    description: 'Premium air-conditioned room with a comfortable double bed, modern amenities, and a peaceful ambiance.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
  },
  {
    id: 4,
    name: 'Deluxe AC Room',
    category: 'ac',
    hasAC: true,
    bedType: 'King Size Bed',
    capacity: 3,
    description: 'Our finest AC room featuring a king-size bed, premium furnishings, and all modern comforts for a luxurious stay.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
  },
  {
    id: 5,
    name: 'Four Occupancy Room',
    category: 'multi',
    hasAC: false,
    bedType: 'Multiple Beds',
    capacity: 4,
    description: 'Ideal for families or groups of friends, this room comfortably accommodates 4 guests with separate beds.',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
  },
  {
    id: 6,
    name: 'Multi-Occupancy Dormitory',
    category: 'multi',
    hasAC: false,
    bedType: 'Bunk Beds',
    capacity: 8,
    description: 'Budget-friendly dormitory-style accommodation perfect for large groups or pilgrimage parties.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
  },
  {
    id: 7,
    name: 'Family Suite Non-AC',
    category: 'multi',
    hasAC: false,
    bedType: 'Double + Single Beds',
    capacity: 5,
    description: 'A spacious family room with one double bed and two single beds, perfect for families traveling together.',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80',
  },
  {
    id: 8,
    name: 'Premium AC Suite',
    category: 'ac',
    hasAC: true,
    bedType: 'King Size Bed',
    capacity: 4,
    description: 'Our most premium offering with AC, king-size bed, sitting area, and exclusive amenities for a divine experience.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
  },
];

const categories: { id: RoomCategory; label: string }[] = [
  { id: 'all', label: 'All Rooms' },
  { id: 'non-ac', label: 'Non-AC Rooms' },
  { id: 'ac', label: 'AC Rooms' },
  { id: 'multi', label: 'Multi-Occupancy' },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<RoomCategory>('all');

  const filteredRooms = activeCategory === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === activeCategory);

  const getWhatsAppMessage = (roomName: string) => {
    return encodeURIComponent(
      `Hello, I would like to book the ${roomName} at Vindravan Shri Giriraj Sewa Sadan. Please share the availability and rates.`
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-spiritual-green font-medium text-sm uppercase tracking-wider mb-3">
              Our Rooms
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Room Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-spiritual-green via-spiritual-yellow to-spiritual-green mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground">
              Browse our selection of comfortable rooms designed to make your 
              spiritual stay in Vrindavan peaceful and rejuvenating.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 'bg-primary' : ''}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="bg-secondary rounded-xl overflow-hidden card-hover group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* AC Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                    room.hasAC 
                      ? 'bg-spiritual-green text-white' 
                      : 'bg-primary text-primary-foreground'
                  }`}>
                    {room.hasAC ? <Snowflake size={12} /> : <Wind size={12} />}
                    {room.hasAC ? 'AC' : 'Non-AC'}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {room.name}
                  </h3>

                  {/* Details */}
                  <div className="flex flex-wrap gap-3 mb-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users size={14} />
                      Up to {room.capacity}
                    </span>
                    <span>•</span>
                    <span>{room.bedType}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Book Now */}
                  <a
                    href={`https://wa.me/919809802980?text=${getWhatsAppMessage(room.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Looking for Something Specific?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us directly to discuss your requirements and get the best 
              room suited for your pilgrimage needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919809802980">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 98098 02980
                </Button>
              </a>
              <a href="tel:+918955807505">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 89558 07505
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
