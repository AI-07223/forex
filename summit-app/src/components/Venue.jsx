import { MapPin, Waves, Building2, Utensils, Wifi, Car } from 'lucide-react';
import './Venue.css';

const Venue = () => {
    const venueImages = [
        { src: '/images/venue/peach-convention-hall.jpg', title: 'PEACH Convention Center', description: 'World-class convention facilities' },
        { src: '/images/venue/grand-lobby.jpg', title: 'Grand Lobby', description: 'Elegant resort entrance' },
        { src: '/images/venue/executive-lounge.jpg', title: 'Executive Lounge', description: 'Premium networking spaces' },
        { src: '/images/venue/fine-dining.jpg', title: 'Fine Dining', description: 'Exquisite culinary experience' },
        { src: '/images/venue/ocean-view-suite.jpg', title: 'Ocean View Suite', description: 'Luxury beachfront accommodation' },
        { src: '/images/venue/infinity-pool-sunset.jpg', title: 'Infinity Pool', description: 'Stunning sunset views' },
        { src: '/images/venue/resort-pool.jpg', title: 'Resort Pool & Spa', description: 'Relaxation paradise' },
        { src: '/images/venue/resort-evening.jpg', title: 'Resort Evening', description: 'Breathtaking night ambiance' }
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

                {/* Floor Plans Section */}
                <div className="floor-plans-section">
                    <h3 className="floor-plans-title">Exhibition Floor Plans</h3>
                    <p className="floor-plans-subtitle">
                        Explore our world-class exhibition halls with 50+ premium booths across multiple categories
                    </p>

                    <div className="floor-plans-grid">
                        <div className="floor-plan-card">
                            <div className="floor-plan-image">
                                <img src="/images/venue/floor-plan-hall1.jpg" alt="Hall 1 Booth Floor Plan" loading="lazy" />
                            </div>
                            <div className="floor-plan-content">
                                <h4>Hall 1 — Booth Layout</h4>
                                <p>Premium exhibition space featuring 100+ booths across 7 tiers</p>
                                <div className="floor-plan-highlights">
                                    <span className="highlight-badge official">Official</span>
                                    <span className="highlight-badge exclusive">Exclusive</span>
                                    <span className="highlight-badge diamond-plus">Diamond+</span>
                                    <span className="highlight-badge diamond">Diamond</span>
                                    <span className="highlight-badge platinum">Platinum</span>
                                    <span className="highlight-badge gold">Gold</span>
                                    <span className="highlight-badge silver">Silver</span>
                                    <span className="highlight-badge bronze">Bronze</span>
                                </div>
                            </div>
                        </div>

                        <div className="floor-plan-card">
                            <div className="floor-plan-image">
                                <img src="/images/venue/floor-plan-hallab.jpg" alt="Hall AB Layout" loading="lazy" />
                            </div>
                            <div className="floor-plan-content">
                                <h4>Hall AB — Conference Space</h4>
                                <p>2,994 sqm of flexible event space with VIP lounges & secretariat</p>
                                <div className="floor-plan-highlights">
                                    <span className="highlight-badge blue">VIP Lounge</span>
                                    <span className="highlight-badge blue">AV Office</span>
                                    <span className="highlight-badge blue">Registration</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
