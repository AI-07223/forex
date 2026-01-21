import { MapPin, Waves, Building2, Utensils, Wifi, Car } from 'lucide-react';
import './Venue.css';

const Venue = () => {
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

                {/* Venue Visual */}
                <div className="venue-showcase">
                    <div className="venue-image">
                        <div className="venue-overlay">
                            <div className="venue-location">
                                <MapPin size={24} />
                                <div>
                                    <h3>Pattaya, Thailand</h3>
                                    <p>Royal Cliff Beach Resort</p>
                                </div>
                            </div>
                        </div>
                        {/* Gradient background instead of image */}
                        <div className="venue-gradient"></div>
                    </div>

                    <div className="venue-info-cards">
                        <div className="venue-info-card">
                            <h4>Convention Center</h4>
                            <p>50,000+ sq.ft of versatile event space with cutting-edge AV equipment</p>
                        </div>
                        <div className="venue-info-card">
                            <h4>Ocean View</h4>
                            <p>Spectacular beachfront setting overlooking the Gulf of Thailand</p>
                        </div>
                        <div className="venue-info-card">
                            <h4>Luxury Rooms</h4>
                            <p>1,000+ premium rooms across four distinct hotels on the property</p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="venue-features">
                    {features.map((feature, index) => (
                        <div key={index} className="venue-feature">
                            <div className="feature-icon">{feature.icon}</div>
                            <div>
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
