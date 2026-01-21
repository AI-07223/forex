import { ArrowRight, Rocket, Calendar, MapPin } from 'lucide-react';
import './Register.css';

const Register = () => {
    return (
        <section id="register" className="register section">
            <div className="container">
                <div className="register-card">
                    <div className="register-bg">
                        <div className="register-gradient"></div>
                        <div className="register-pattern"></div>
                    </div>

                    <div className="register-content">
                        <div className="register-icon">
                            <Rocket size={40} />
                        </div>

                        <h2 className="register-title">
                            Ready to Join <span className="gradient-text">Asia's Premier Trading Summit?</span>
                        </h2>

                        <p className="register-description">
                            Secure your spot at Elite Traders Summit 2026. Limited seats available
                            for this exclusive, invitation-only event.
                        </p>

                        <div className="register-info">
                            <div className="info-tag">
                                <Calendar size={18} />
                                <span>April 24-26, 2026</span>
                            </div>
                            <div className="info-tag">
                                <MapPin size={18} />
                                <span>Pattaya, Thailand</span>
                            </div>
                        </div>

                        <div className="register-actions">
                            <a href="mailto:info@elitetraderssummit.com" className="btn btn-primary btn-lg">
                                Register Now
                                <ArrowRight size={20} />
                            </a>
                            <a href="tel:+917300415679" className="btn btn-outline btn-lg">
                                Call: +91 7300415679
                            </a>
                        </div>

                        <div className="register-stats">
                            <div className="register-stat">
                                <span className="stat-number">1500+</span>
                                <span className="stat-text">Expected Attendees</span>
                            </div>
                            <div className="register-divider"></div>
                            <div className="register-stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-text">Exhibiting Brokers</span>
                            </div>
                            <div className="register-divider"></div>
                            <div className="register-stat">
                                <span className="stat-number">150+</span>
                                <span className="stat-text">Influencers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
