import { Check, Star, Crown, Award, Gem } from 'lucide-react';
import './Sponsors.css';

const Sponsors = () => {
    const tiers = [
        {
            name: 'Title Sponsor',
            price: '$100,000',
            icon: <Crown size={32} />,
            featured: true,
            tagline: '"Elite Traders Summit 2026 – Powered by [Your Brand]"',
            features: [
                'Largest prime exhibition booth',
                '30-minute opening keynote',
                'Logo on main stage (all 3 days)',
                'Exclusive awards night branding',
                'Dedicated influencer collaboration',
                'VIP lounge branding',
                '10 VIP delegate passes',
                'Media interviews & aftermovie feature',
                '2 Panel discussions + 2 Seminars',
                '8 Roll-ups & 8 Flags (space)',
                'All attendance data access',
                '5 Press interviews',
                '3 Email campaigns',
                '6 VIP Hall permits'
            ]
        },
        {
            name: 'Platinum Sponsor',
            price: '$50,000',
            icon: <Gem size={32} />,
            featured: false,
            features: [
                'Premium booth location',
                '20-minute speaking slot',
                'Gala night branding',
                'Influencer collaboration',
                '6 VIP passes',
                'Awards mention',
                'Sponsor wall branding',
                'Logo on website & passes',
                '7 VIP closing party invitations',
                '5 Roll-ups & 5 Flags',
                'Attendance data access',
                '4 VIP Hall permits'
            ]
        },
        {
            name: 'Gold Sponsor',
            price: '$25,000',
            icon: <Award size={32} />,
            featured: false,
            features: [
                'Standard booth',
                '15-minute speaking slot',
                'Awards mention',
                '4 VIP passes',
                'Sponsor wall branding',
                'Logo on website & passes',
                '4 Roll-ups & 4 Flags',
                'Social media promotion'
            ]
        },
        {
            name: 'Silver Sponsor',
            price: '$11,000',
            icon: <Star size={32} />,
            featured: false,
            features: [
                'Exhibition booth',
                'Sponsor wall branding',
                '2 VIP passes',
                'Broker Award eligible',
                'Logo on website'
            ]
        }
    ];

    const partnerTiers = [
        {
            name: 'Education Institute Partner',
            price: '$5,000',
            features: ['Dedicated education booth', 'Workshop/masterclass slot', 'Student enrollment opportunities', 'Official education partner recognition']
        },
        {
            name: 'Participation Partner',
            price: '$3,000',
            features: ['3-day exhibition stall', '3-day stay at Royal Cliff', 'Direct broker interaction', 'Lead generation', 'Brand listing on website']
        }
    ];

    return (
        <section id="sponsors" className="sponsors section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Crown size={16} />
                        Sponsorship Tiers
                    </span>
                    <h2 className="section-title">
                        Partner With <span className="gradient-text">Asia's Premium Summit</span>
                    </h2>
                    <p className="section-subtitle">
                        Direct access to a highly targeted audience of traders, brokers, and industry leaders
                    </p>
                </div>

                {/* Main Tiers */}
                <div className="sponsor-grid">
                    {tiers.map((tier, index) => (
                        <div key={index} className={`sponsor-card ${tier.featured ? 'featured' : ''}`}>
                            {tier.featured && <div className="featured-badge">Most Popular</div>}
                            <div className="sponsor-icon">{tier.icon}</div>
                            <h3 className="sponsor-name">{tier.name}</h3>
                            <div className="sponsor-price">{tier.price}</div>
                            {tier.tagline && <p className="sponsor-tagline">{tier.tagline}</p>}
                            <ul className="sponsor-features">
                                {tier.features.slice(0, tier.featured ? 14 : 8).map((feature, i) => (
                                    <li key={i}>
                                        <Check size={16} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#register" className={`btn ${tier.featured ? 'btn-primary' : 'btn-secondary'}`}>
                                Inquire Now
                            </a>
                        </div>
                    ))}
                </div>

                {/* Partner Tiers */}
                <div className="partner-section">
                    <h3 className="partner-title">Additional Partnership Options</h3>
                    <div className="partner-grid">
                        {partnerTiers.map((tier, index) => (
                            <div key={index} className="partner-card">
                                <div className="partner-header">
                                    <h4 className="partner-name">{tier.name}</h4>
                                    <span className="partner-price">{tier.price}</span>
                                </div>
                                <ul className="partner-features">
                                    {tier.features.map((feature, i) => (
                                        <li key={i}>
                                            <Check size={14} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROI Section */}
                <div className="roi-section">
                    <h3 className="roi-title">Why This Event Delivers ROI</h3>
                    <div className="roi-grid">
                        <div className="roi-item">
                            <span className="roi-icon">✓</span>
                            <span>Curated audience = high conversion</span>
                        </div>
                        <div className="roi-item">
                            <span className="roi-icon">✓</span>
                            <span>Influencer-powered brand reach</span>
                        </div>
                        <div className="roi-item">
                            <span className="roi-icon">✓</span>
                            <span>Authority & credibility positioning</span>
                        </div>
                        <div className="roi-item">
                            <span className="roi-icon">✓</span>
                            <span>Real partnerships, not just visibility</span>
                        </div>
                        <div className="roi-item">
                            <span className="roi-icon">✓</span>
                            <span>Long-term business connections</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
