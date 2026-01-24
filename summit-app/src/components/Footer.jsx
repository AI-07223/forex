import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const quickLinks = [
        { href: '#about', label: 'About' },
        { href: '#schedule', label: 'Schedule' },
        { href: '#sponsors', label: 'Sponsors' },
        { href: '#venue', label: 'Venue' },
        { href: '#faq', label: 'FAQ' }
    ];

    const legalLinks = [
        { href: '#', label: 'Privacy Policy' },
        { href: '#', label: 'Terms of Service' },
        { href: '#', label: 'Refund Policy' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <TrendingUp size={28} />
                            <span>ETS<span className="logo-year">2026</span></span>
                        </a>
                        <p className="footer-tagline">
                            Asia's Premium Forex, Crypto & Trading Experience
                        </p>
                        <div className="footer-event-info">
                            <p><strong>May 1-3, 2026</strong></p>
                            <p>Royal Cliff & PEACH Convention Center</p>
                            <p>Pattaya, Thailand</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <Phone size={16} />
                                <a href="tel:+917300415679">+91 7300415679</a>
                            </li>
                            <li>
                                <Mail size={16} />
                                <a href="mailto:info@elitetraderssummit.com">info@elitetraderssummit.com</a>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>Pattaya, Thailand</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4>Stay Updated</h4>
                        <p>Get the latest updates about the summit</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>© 2026 Elite Traders Summit. All rights reserved.</p>
                    </div>
                    <div className="footer-legal">
                        {legalLinks.map((link, index) => (
                            <a key={index} href={link.href}>{link.label}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
