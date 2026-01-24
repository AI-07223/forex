import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send, Globe, Instagram, Youtube, MessageCircle, AlertCircle } from 'lucide-react';
import Toast from './Toast';
import { FORM_CONFIG, isBackendConfigured } from '../config/formConfig';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const submitToBackend = async () => {
        const response = await fetch(FORM_CONFIG.API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: FORM_CONFIG.WEB3FORMS_ACCESS_KEY,
                subject: `Contact: ${formData.subject}`,
                from_name: formData.name,
                name: formData.name,
                email: formData.email,
                inquiry_type: formData.subject,
                message: formData.message,
                form_type: 'Contact'
            })
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || 'Form submission failed');
        }
        return result;
    };

    const submitViaEmail = () => {
        const subject = encodeURIComponent(`${formData.subject} - Elite Traders Summit`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:${FORM_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setToast({ visible: true, message: 'Please fix the errors', type: 'error' });
            return;
        }

        setIsSubmitting(true);

        try {
            if (isBackendConfigured()) {
                await submitToBackend();
                setToast({ visible: true, message: 'Message sent successfully!', type: 'success' });
                setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
            } else {
                submitViaEmail();
                setTimeout(() => {
                    setToast({ visible: true, message: 'Email client opened!', type: 'success' });
                    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
                }, 1000);
            }
        } catch (err) {
            console.error('Form error:', err);
            setToast({ visible: true, message: 'Something went wrong', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email Us',
            value: 'elitetraderssummit@gmail.com',
            href: 'mailto:elitetraderssummit@gmail.com'
        },
        {
            icon: Phone,
            label: 'Call Us',
            value: '+91 7300415679',
            href: 'tel:+917300415679'
        },
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+91 7300415679',
            href: 'https://wa.me/917300415679'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Pattaya, Thailand',
            href: null
        }
    ];

    const socialLinks = [
        { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/elitetraderssummit' },
        { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@elitetraderssummit' },
        { icon: Globe, label: 'Website', href: '#' }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-header">
                    <span className="section-badge">
                        <Mail size={16} />
                        Contact Us
                    </span>
                    <h2 className="section-title">
                        Let's Build <span className="gradient-text">ETS 2026</span> Together
                    </h2>
                    <p className="section-subtitle">
                        Sponsorships, booths, speaking, influencer collaborations, media coverage — reach out and our team will respond.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-panel">
                        <div className="contact-cards">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href || '#'}
                                    className={`contact-card ${!item.href ? 'no-link' : ''}`}
                                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    <div className="contact-card-icon">
                                        <item.icon size={22} />
                                    </div>
                                    <div className="contact-card-content">
                                        <span className="contact-card-label">{item.label}</span>
                                        <span className="contact-card-value">{item.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="office-hours">
                            <div className="hours-header">
                                <Clock size={18} />
                                <h4>Response Time</h4>
                            </div>
                            <p>We typically respond within 24-48 hours during business days.</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-panel">
                        <div className="form-card">
                            <div className="form-header">
                                <h3>Send a Message</h3>
                                <p>We'd love to hear from you</p>
                            </div>

                            <form onSubmit={handleSubmit} className="contact-form" noValidate>
                                <div className="form-row">
                                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                        />
                                        {errors.name && (
                                            <span className="error-message">
                                                <AlertCircle size={14} />
                                                {errors.name}
                                            </span>
                                        )}
                                    </div>

                                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                        <input
                                            type="email"
                                            id="contactEmail"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@email.com"
                                        />
                                        {errors.email && (
                                            <span className="error-message">
                                                <AlertCircle size={14} />
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="contactSubject">Subject</label>
                                    <select
                                        id="contactSubject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    >
                                        <option>General Inquiry</option>
                                        <option>Sponsorship</option>
                                        <option>Speaking Opportunity</option>
                                        <option>Media & Press</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea
                                        id="contactMessage"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message..."
                                        rows={5}
                                    />
                                    {errors.message && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.message}
                                        </span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className={`btn btn-primary btn-submit ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            Sending...
                                            <div className="btn-spinner"></div>
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.visible}
                onClose={() => setToast({ ...toast, visible: false })}
            />
        </section>
    );
};

export default Contact;
