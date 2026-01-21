import { Target, Award, Handshake, Globe, TrendingUp, Shield } from 'lucide-react';
import './About.css';

const About = () => {
    const features = [
        {
            icon: <Target size={32} />,
            title: 'Quality Over Quantity',
            description: 'Every participant is a decision-maker or serious market contributor. No public expos, only curated professionals.'
        },
        {
            icon: <Handshake size={32} />,
            title: 'High-Value Networking',
            description: 'Enable meaningful partnerships between brokers, traders, influencers, and industry leaders.'
        },
        {
            icon: <Award size={32} />,
            title: 'Recognition & Awards',
            description: 'Elite Trader Awards Gala honoring excellence in trading, innovation, and industry contribution.'
        },
        {
            icon: <Globe size={32} />,
            title: 'Global Reach',
            description: 'Connect with forex experts, crypto pioneers, and fintech innovators from around the world.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Business & Education',
            description: 'Masterclasses, panel discussions, and workshops from industry-leading experts.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Premium Experience',
            description: 'Luxury hospitality at Royal Cliff, beachfront venues, and world-class entertainment.'
        }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <TrendingUp size={16} />
                        About The Summit
                    </span>
                    <h2 className="section-title">
                        Not an Expo. Not a Seminar.
                        <br />
                        <span className="gradient-text">A Premium Global Trading Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        Elite Traders Summit 2026 is an exclusive, invitation-only international summit
                        designed to unite the entire global trading ecosystem under one luxury destination.
                    </p>
                </div>

                {/* Vision Statement */}
                <div className="vision-card">
                    <div className="vision-content">
                        <h3 className="vision-label">Our Vision</h3>
                        <p className="vision-text">
                            To create Asia's most <span className="highlight">premium</span>,
                            <span className="highlight"> trusted</span>, and
                            <span className="highlight"> result-driven</span> trading industry summit.
                        </p>
                    </div>
                    <div className="vision-stats">
                        <div className="vision-stat">
                            <span className="vision-stat-value">1500+</span>
                            <span className="vision-stat-label">Curated Participants</span>
                        </div>
                        <div className="vision-stat">
                            <span className="vision-stat-value">50+</span>
                            <span className="vision-stat-label">Exhibition Booths</span>
                        </div>
                        <div className="vision-stat">
                            <span className="vision-stat-value">3</span>
                            <span className="vision-stat-label">Days of Excellence</span>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
