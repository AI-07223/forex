import { useMemo } from 'react';
import { ArrowRight, Calendar, MapPin, Users, Sparkles } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '../hooks/useAnimations';
import './Hero.css';

const Hero = () => {
    const [statsRef, statsVisible] = useScrollAnimation(0.3);

    // Animated counters
    const brokerCount = useCountUp(50, 2000, statsVisible);
    const influencerCount = useCountUp(150, 2000, statsVisible);
    const cryptoCount = useCountUp(30, 2000, statsVisible);

    // Generate consistent candlesticks using useMemo
    const candlesticks = useMemo(() => {
        return [...Array(25)].map((_, i) => {
            const seed = (i * 7 + 3) % 10;
            const isGreen = seed > 3;
            const height = 25 + (seed * 8);
            const y = 140 + ((i * 13) % 120);
            return { i, isGreen, height, y, x: 30 + i * 32 };
        });
    }, []);

    return (
        <section className="hero">
            {/* Floating Particles */}
            <div className="particles">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${8 + (i * 8)}%`,
                            top: `${15 + ((i * 17) % 70)}%`,
                            animationDelay: `${i * 0.4}s`,
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            opacity: 0.2 + (i % 4) * 0.1
                        }}
                    />
                ))}
            </div>

            {/* Animated Background */}
            <div className="hero-bg">
                <div className="hero-gradient-1"></div>
                <div className="hero-gradient-2"></div>
                <div className="hero-gradient-3"></div>

                <div className="trading-chart">
                    <svg viewBox="0 0 800 400" className="chart-svg">
                        {/* Grid Lines */}
                        <g className="grid-lines">
                            {[...Array(8)].map((_, i) => (
                                <line
                                    key={`h-${i}`}
                                    x1="0" y1={50 + i * 45}
                                    x2="800" y2={50 + i * 45}
                                    stroke="rgba(255, 107, 107, 0.12)"
                                    strokeWidth="1"
                                />
                            ))}
                            {[...Array(10)].map((_, i) => (
                                <line
                                    key={`v-${i}`}
                                    x1={80 * i} y1="0"
                                    x2={80 * i} y2="400"
                                    stroke="rgba(59, 130, 246, 0.08)"
                                    strokeWidth="1"
                                />
                            ))}
                        </g>

                        {/* Candlestick Group */}
                        <g className="candlesticks">
                            {candlesticks.map(({ i, isGreen, height, y, x }) => (
                                <g key={i} className={`candle-group ${isGreen ? 'green' : 'red'}`}>
                                    <line
                                        x1={x} y1={y - 12}
                                        x2={x} y2={y + height + 12}
                                        stroke={isGreen ? '#00d26a' : '#ff3b5c'}
                                        strokeWidth="1.5"
                                        opacity="0.4"
                                        className="candle-wick"
                                    />
                                    <rect
                                        x={x - 7} y={y}
                                        width="14" height={height}
                                        fill={isGreen ? '#00d26a' : '#ff3b5c'}
                                        opacity="0.7"
                                        rx="2"
                                        className="candle-body"
                                        style={{ animationDelay: `${i * 0.08}s` }}
                                    />
                                </g>
                            ))}
                        </g>

                        {/* Multiple Trend Lines */}
                        <path
                            d="M 0,300 Q 150,250 300,270 T 500,220 T 800,160"
                            stroke="url(#goldGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            className="trend-line trend-line-1"
                        />
                        <path
                            d="M 0,330 Q 200,280 400,310 T 800,240"
                            stroke="url(#blueGradient)"
                            strokeWidth="1.5"
                            fill="none"
                            className="trend-line trend-line-2"
                            opacity="0.6"
                        />

                        {/* Glow Effect */}
                        <ellipse
                            cx="400" cy="200"
                            rx="200" ry="100"
                            fill="url(#radialGlow)"
                            className="chart-glow"
                        />

                        <defs>
                            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
                                <stop offset="30%" stopColor="#fbbf24" stopOpacity="0.8" />
                                <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="radialGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.1" />
                                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="hero-content container">
                <div className="hero-badge glow-border">
                    <Sparkles size={16} className="bounce" />
                    <span>Asia's Premium Trading Experience</span>
                </div>

                <h1 className="hero-title">
                    <span className="title-line">ELITE TRADERS</span>
                    <span className="title-line shimmer-text">SUMMIT 2026</span>
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
                    <a href="#register" className="btn btn-primary pulse-ring">
                        Register Now
                        <ArrowRight size={20} />
                    </a>
                    <a href="#sponsors" className="btn btn-secondary">
                        Become a Sponsor
                    </a>
                </div>

                {/* Stats Row with Animated Counters */}
                <div ref={statsRef} className={`hero-stats ${statsVisible ? 'visible' : ''}`}>
                    <div className="stat stat-animated">
                        <span className="stat-value">{brokerCount}+</span>
                        <span className="stat-label">Forex & CFD Brokers</span>
                    </div>
                    <div className="stat stat-animated">
                        <span className="stat-value">{influencerCount}+</span>
                        <span className="stat-label">Influencers & YouTubers</span>
                    </div>
                    <div className="stat stat-animated">
                        <span className="stat-value">{cryptoCount}+</span>
                        <span className="stat-label">Crypto Companies</span>
                    </div>
                    <div className="stat stat-animated">
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
