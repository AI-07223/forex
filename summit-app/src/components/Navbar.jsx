import { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Event date: April 24, 2026
    const eventDate = new Date('2026-04-24T09:00:00').getTime();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [eventDate]);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#schedule', label: 'Schedule' },
        { href: '#sponsors', label: 'Sponsors' },
        { href: '#venue', label: 'Venue' },
        { href: '#faq', label: 'FAQ' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="navbar-logo">
                    <TrendingUp className="logo-icon" />
                    <span className="logo-text">ETS<span className="logo-year">2026</span></span>
                </a>

                <div className="navbar-countdown">
                    <div className="countdown-item">
                        <span className="countdown-value">{countdown.days}</span>
                        <span className="countdown-label">Days</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                        <span className="countdown-value">{String(countdown.hours).padStart(2, '0')}</span>
                        <span className="countdown-label">Hours</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                        <span className="countdown-value">{String(countdown.minutes).padStart(2, '0')}</span>
                        <span className="countdown-label">Min</span>
                    </div>
                    <div className="countdown-separator">:</div>
                    <div className="countdown-item">
                        <span className="countdown-value">{String(countdown.seconds).padStart(2, '0')}</span>
                        <span className="countdown-label">Sec</span>
                    </div>
                </div>

                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#register" className="navbar-cta">
                    Register Now
                </a>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}
                <a href="#register" className="mobile-cta" onClick={() => setIsMobileMenuOpen(false)}>
                    Register Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
