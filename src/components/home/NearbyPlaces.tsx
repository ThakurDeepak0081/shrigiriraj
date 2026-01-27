import { MapPin, Navigation } from 'lucide-react';

const nearbyPlaces = [
  {
    name: 'Prem Mandir',
    distance: '600 meters',
    description: 'The magnificent marble temple dedicated to Radha Krishna, known for its stunning architecture and evening light show.',
    icon: '🛕',
  },
  {
    name: 'ISKCON Temple',
    subtitle: 'Krishna Balaram Mandir',
    distance: '3.5 km',
    description: 'The famous ISKCON temple in Vrindavan, a major pilgrimage site for devotees from around the world.',
    icon: '🙏',
  },
  {
    name: 'Banke Bihari Temple',
    distance: '3.5 km',
    description: 'One of the most sacred temples in Vrindavan, dedicated to Lord Krishna in his mesmerizing Banke Bihari form.',
    icon: '✨',
  },
  {
    name: 'Maa Vaishno Devi Dham',
    distance: '3 km',
    description: 'A replica of the famous Vaishno Devi temple, offering devotees a spiritual experience closer to home.',
    icon: '🔱',
  },
];

const NearbyPlaces = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-spiritual-yellow font-medium text-sm uppercase tracking-wider mb-3">
            Explore
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nearby Spiritual Places
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-spiritual-yellow via-spiritual-red to-spiritual-yellow mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg">
            Our prime location gives you easy access to the most sacred temples 
            and spiritual sites in Vrindavan.
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyPlaces.map((place, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl card-hover group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{place.icon}</div>

              {/* Name */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {place.name}
              </h3>
              {place.subtitle && (
                <p className="text-sm text-muted-foreground mb-2">{place.subtitle}</p>
              )}

              {/* Distance */}
              <div className="flex items-center gap-2 text-spiritual-green mb-4">
                <Navigation className="w-4 h-4" />
                <span className="text-sm font-medium">{place.distance}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {place.description}
              </p>

              {/* Map Link */}
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(place.name + ' Vrindavan')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-spiritual-yellow transition-colors mt-4"
              >
                <MapPin className="w-4 h-4" />
                View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
