import { ArrowRight, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient-1"></div>
                <div className="hero-gradient-2"></div>
                <div className="trading-chart">
                    <svg viewBox="0 0 800 400" className="chart-svg">
                        {/* Candlestick Group */}
                        <g className="candlesticks">
                            {[...Array(20)].map((_, i) => {
                                const x = 40 + i * 38;
                                const isGreen = Math.random() > 0.4;
                                const height = 30 + Math.random() * 80;
                                const y = 150 + Math.random() * 100;
                                return (
                                    <g key={i} className={`candle ${isGreen ? 'green' : 'red'}`}>
                                        <line
                                            x1={x} y1={y - 15}
                                            x2={x} y2={y + height + 15}
                                            stroke={isGreen ? '#00d26a' : '#ff3b5c'}
                                            strokeWidth="1"
                                            opacity="0.5"
                                        />
                                        <rect
                                            x={x - 6} y={y}
                                            width="12" height={height}
                                            fill={isGreen ? '#00d26a' : '#ff3b5c'}
                                            opacity="0.6"
                                            rx="2"
                                        />
                                    </g>
                                );
                            })}
                        </g>
                        {/* Trend Line */}
                        <path
                            d="M 0,280 Q 200,200 400,240 T 800,180"
                            stroke="url(#goldGradient)"
                            strokeWidth="3"
                            fill="none"
                            className="trend-line"
                        />
                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                                <stop offset="50%" stopColor="#fbbf24" stopOpacity="1" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-badge">
                    <Sparkles size={16} />
                    <span>Asia's Premium Trading Experience</span>
                </div>

                <h1 className="hero-title">
                    <span className="title-line">ELITE TRADERS</span>
                    <span className="title-line gradient-text">SUMMIT 2026</span>
                </h1>

                <p className="hero-subtitle">
                    Where Forex & Crypto Leaders Converge. The most exclusive, invitation-only
                    international summit uniting the global trading ecosystem under one luxury destination.
                </p>

                <div className="hero-info">
                    <div className="info-item">
                        <Calendar size={20} />
                        <span>24-26 April 2026</span>
                    </div>
                    <div className="info-divider"></div>
                    <div className="info-item">
                        <MapPin size={20} />
                        <span>Pattaya, Thailand</span>
                    </div>
                    <div className="info-divider"></div>
                    <div className="info-item">
                        <Users size={20} />
                        <span>1500+ Attendees</span>
                    </div>
                </div>

                <div className="hero-actions">
                    <a href="#register" className="btn btn-primary">
                        Register Now
                        <ArrowRight size={20} />
                    </a>
                    <a href="#sponsors" className="btn btn-secondary">
                        Become a Sponsor
                    </a>
                </div>

                {/* Stats Row */}
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-value">50+</span>
                        <span className="stat-label">Forex & CFD Brokers</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">150+</span>
                        <span className="stat-label">Influencers & YouTubers</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">30+</span>
                        <span className="stat-label">Crypto Companies</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">3</span>
                        <span className="stat-label">Days of Excellence</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    );
};

export default Hero;
