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
                </div>

                {/* About the Event Content */}
                <div className="about-content">
                    <h3 className="about-content-title">About the Event</h3>
                    <div className="about-content-text">
                        <p>
                            <span className="highlight">Elite Traders Summit 2026</span> is a premium, invitation-only global gathering designed for the leaders of the <span className="highlight">Forex, Crypto, and Blockchain ecosystem</span>. Hosted in <span className="highlight">Pattaya, Thailand</span> from <span className="highlight">1–3 May 2026</span>, the summit brings together top brokers, professional traders, institutional partners, educators, and influential voices from across the world under one roof. This is not a conventional expo or seminar, but a carefully curated experience focused on meaningful networking, strategic partnerships, and long-term business growth.
                        </p>
                        <p>
                            Over three immersive days, attendees will engage in high-impact keynote sessions, panel discussions, closed-door networking, and brand showcases, complemented by exclusive evening experiences including award ceremonies, gala dinners, and premium entertainment. <span className="highlight">Elite Traders Summit</span> is built to create real value — enabling brokers to expand their IB networks, traders to connect directly with global platforms, and influencers to collaborate with leading brands. The summit sets a new benchmark for luxury, professionalism, and results-driven engagement in the global trading industry.
                        </p>
                    </div>
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
