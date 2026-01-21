import { Building2, Users, GraduationCap, Video, CreditCard, Network, CheckCircle } from 'lucide-react';
import './Audience.css';

const Audience = () => {
    const audiences = [
        {
            icon: <Building2 size={40} />,
            title: 'Forex & CFD Brokers',
            count: '50-60',
            benefits: [
                'Premium exhibition booths',
                'Speaking slots & panel participation',
                'IB & partner recruitment',
                'VIP networking access'
            ],
            color: 'blue'
        },
        {
            icon: <Network size={40} />,
            title: 'Crypto & Blockchain Companies',
            count: '30-40',
            benefits: [
                'Brand visibility to traders',
                'Investor connections',
                'Media exposure',
                'Awards & recognition'
            ],
            color: 'purple'
        },
        {
            icon: <Users size={40} />,
            title: 'Traders & Investors',
            count: '1000+',
            benefits: [
                'Learn from industry leaders',
                'Direct access to top brokers',
                'Trader recognition & awards',
                'Premium hospitality'
            ],
            color: 'green'
        },
        {
            icon: <Video size={40} />,
            title: 'Influencers & YouTubers',
            count: '150+',
            benefits: [
                'Brand collaborations',
                'Sponsored luxury stay',
                'Content creation zones',
                'Global exposure & awards'
            ],
            color: 'gold'
        },
        {
            icon: <GraduationCap size={40} />,
            title: 'Education Institutes',
            count: '30-50',
            benefits: [
                'Promote courses & programs',
                'Student enrollments',
                'Workshops & masterclasses',
                'Brand credibility'
            ],
            color: 'cyan'
        },
        {
            icon: <CreditCard size={40} />,
            title: 'Fintech & Payment Partners',
            count: '20+',
            benefits: [
                'Showcase payment solutions',
                'Connect with brokers',
                'Lead generation',
                'Partnership opportunities'
            ],
            color: 'orange'
        }
    ];

    return (
        <section id="audience" className="audience section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Users size={16} />
                        Who Should Attend
                    </span>
                    <h2 className="section-title">
                        Built For The <span className="gradient-text">Global Trading Ecosystem</span>
                    </h2>
                    <p className="section-subtitle">
                        Whether you're a broker seeking IBs, a trader looking for opportunities,
                        or an influencer wanting brand collaborations – this is your stage.
                    </p>
                </div>

                <div className="audience-grid">
                    {audiences.map((item, index) => (
                        <div key={index} className={`audience-card audience-card-${item.color}`}>
                            <div className="audience-icon">{item.icon}</div>
                            <div className="audience-count">{item.count}</div>
                            <h3 className="audience-title">{item.title}</h3>
                            <ul className="audience-benefits">
                                {item.benefits.map((benefit, i) => (
                                    <li key={i}>
                                        <CheckCircle size={16} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="audience-cta">
                    <p>Ready to be part of Asia's premier trading event?</p>
                    <a href="#register" className="btn btn-primary">
                        Register Your Interest
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Audience;
