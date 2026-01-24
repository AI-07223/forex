import { Trophy, Star, TrendingUp, Award, Sparkles } from 'lucide-react';
import './Awards.css';

const Awards = () => {
    const awardCategories = [
        { icon: <TrendingUp size={28} />, title: 'Best Forex Broker', description: 'Excellence in trading services' },
        { icon: <Star size={28} />, title: 'Best Crypto Exchange', description: 'Innovation in digital assets' },
        { icon: <Trophy size={28} />, title: 'Trader of the Year', description: 'Outstanding trading performance' },
        { icon: <Award size={28} />, title: 'Best Trading Educator', description: 'Excellence in education' },
        { icon: <Sparkles size={28} />, title: 'Rising Star Influencer', description: 'Emerging trading voice' },
        { icon: <Star size={28} />, title: 'IB Partner of the Year', description: 'Outstanding partnership' }
    ];

    return (
        <section id="awards" className="awards section">
            <div className="container">
                <div className="awards-content">
                    <div className="awards-info">
                        <span className="section-badge">
                            <Trophy size={16} />
                            Awards Gala
                        </span>
                        <h2 className="section-title">
                            Elite Trader & <span className="gradient-text">Broker Awards</span>
                        </h2>
                        <p className="awards-description">
                            On Day 2 evening, join us for the prestigious Elite Trader & Broker Awards Gala —
                            a black-tie ceremony celebrating excellence in the trading industry.
                        </p>
                        <div className="awards-highlights">
                            <div className="highlight-item">
                                <span className="highlight-icon">🎭</span>
                                <span>Live Entertainment</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🍽️</span>
                                <span>Luxury Dinner</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">🍸</span>
                                <span>Cocktail Night</span>
                            </div>
                        </div>
                        <p className="awards-note">
                            May 2, 2026 • Evening • Royal Cliff Grand Ballroom
                        </p>
                    </div>

                    <div className="awards-categories">
                        <h3>Award Categories</h3>
                        <div className="categories-grid">
                            {awardCategories.map((category, index) => (
                                <div key={index} className="category-card">
                                    <div className="category-icon">{category.icon}</div>
                                    <div>
                                        <h4>{category.title}</h4>
                                        <p>{category.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="awards-decoration">
                <div className="trophy-glow"></div>
            </div>
        </section>
    );
};

export default Awards;
