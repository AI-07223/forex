import { MapPin, Waves, Building2, Utensils, Wifi, Car } from 'lucide-react';
import './Venue.css';

const Venue = () => {
    const venueImages = [
        { src: '/images/venue-exterior.jpg', title: 'Royal Cliff Beach Resort', description: 'Premium beachfront destination' },
        { src: '/images/venue-pool.jpg', title: 'Infinity Pool & Ocean Views', description: 'Stunning sunset vistas' },
        { src: '/images/venue-lounge.jpg', title: 'Executive Lounge', description: 'Premium networking spaces' },
        { src: '/images/venue-dining.jpg', title: 'Fine Dining', description: 'World-class cuisine' }
    ];

    const features = [
        { icon: <Building2 size={24} />, title: 'World-Class Convention Halls', description: 'State-of-the-art facilities' },
        { icon: <Waves size={24} />, title: 'Beachfront Entertainment', description: 'Stunning ocean views' },
        { icon: <Utensils size={24} />, title: 'Luxury Hospitality', description: '5-star accommodation' },
        { icon: <Wifi size={24} />, title: 'High-Speed Connectivity', description: 'Seamless business experience' },
        { icon: <Car size={24} />, title: 'Airport Transfers', description: 'Convenient transportation' },
        { icon: <MapPin size={24} />, title: 'Prime Location', description: 'Pattaya premier resort' }
    ];

    return (
        <section id="venue" className="venue section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <MapPin size={16} />
                        Venue
                    </span>
                    <h2 className="section-title">
                        Royal Cliff & <span className="gradient-text">PEACH Convention Center</span>
                    </h2>
                    <p className="section-subtitle">
                        One of Asia's most prestigious resort and convention destinations,
                        offering world-class facilities on Thailand's stunning coastline
                    </p>
                </div>

                {/* Venue Image Gallery */}
                <div className="venue-gallery">
                    {venueImages.map((image, index) => (
                        <div key={index} className="venue-card">
                            <div className="venue-card-image">
                                <img src={image.src} alt={image.title} loading="lazy" />
                            </div>
                            <div className="venue-card-content">
                                <h4>{image.title}</h4>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="venue-features">
                    {features.map((feature, index) => (
                        <div key={index} className="venue-feature">
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-text">
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Travel Info */}
                <div className="travel-info">
                    <div className="travel-card">
                        <h4>Getting There</h4>
                        <ul>
                            <li>2 hours from Bangkok (Suvarnabhumi Airport)</li>
                            <li>30 minutes from U-Tapao International Airport</li>
                            <li>Complimentary shuttle services available</li>
                        </ul>
                    </div>
                    <div className="travel-card">
                        <h4>Accommodation</h4>
                        <ul>
                            <li>Special rates for summit attendees</li>
                            <li>Choice of 4 premium hotels on-site</li>
                            <li>All-inclusive packages available</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Venue;
