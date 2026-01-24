import { useState } from 'react';
import { ArrowRight, Rocket, Calendar, MapPin, User, Mail, Phone, MessageSquare, Send, AlertCircle } from 'lucide-react';
import Toast from './Toast';
import { FORM_CONFIG, isBackendConfigured } from '../config/formConfig';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'Trader / Investor',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Full name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Phone validation (optional but if provided, should be valid)
        if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
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
                subject: `Registration Inquiry - ${formData.category}`,
                from_name: formData.name,
                name: formData.name,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                category: formData.category,
                message: formData.message || 'No message',
                form_type: 'Registration'
            })
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || 'Form submission failed');
        }
        return result;
    };

    const submitViaEmail = () => {
        const subject = encodeURIComponent(`Registration Inquiry - ${formData.category}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Category: ${formData.category}\n` +
            `Message: ${formData.message || 'No message'}`
        );
        window.location.href = `mailto:${FORM_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            category: 'Trader / Investor',
            message: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            setToast({
                visible: true,
                message: 'Please fix the errors in the form',
                type: 'error'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            if (isBackendConfigured()) {
                // Submit to Web3Forms backend
                await submitToBackend();
                setToast({
                    visible: true,
                    message: 'Registration submitted successfully! We\'ll contact you soon.',
                    type: 'success'
                });
                resetForm();
            } else {
                // Fallback to email client
                submitViaEmail();
                setTimeout(() => {
                    setToast({
                        visible: true,
                        message: 'Email client opened! Please send the email to complete registration.',
                        type: 'success'
                    });
                    resetForm();
                }, 1000);
            }
        } catch (err) {
            console.error('Form submission error:', err);
            setToast({
                visible: true,
                message: 'Something went wrong. Please try again.',
                type: 'error'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="register" className="register section">
            <div className="container">
                <div className="register-header">
                    <span className="section-badge">
                        <Rocket size={16} />
                        Register Now
                    </span>
                    <h2 className="section-title">
                        Register Your <span className="gradient-text">Interest</span>
                    </h2>
                    <p className="section-subtitle">
                        Submit your details to receive the official registration process, pricing, and confirmation steps via email/WhatsApp.
                    </p>
                </div>

                <div className="register-grid">
                    {/* Contact Info Side */}
                    <div className="register-info-panel">
                        <div className="info-card">
                            <div className="info-card-header">
                                <h3>Event Details</h3>
                            </div>
                            <div className="info-items">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Calendar size={20} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">Date</span>
                                        <span className="info-value">01-03 May 2026</span>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="info-content">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">Pattaya, Thailand</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-card-header">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="contact-methods">
                                <a href={`mailto:${FORM_CONFIG.CONTACT_EMAIL}`} className="contact-method">
                                    <Mail size={18} />
                                    <span>{FORM_CONFIG.CONTACT_EMAIL}</span>
                                </a>
                                <a href="tel:+917300415679" className="contact-method">
                                    <Phone size={18} />
                                    <span>+91 7300415679</span>
                                </a>
                            </div>
                        </div>

                        <div className="register-stats">
                            <div className="register-stat">
                                <span className="stat-number">1500+</span>
                                <span className="stat-text">Expected Attendees</span>
                            </div>
                            <div className="register-stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-text">Exhibiting Brokers</span>
                            </div>
                            <div className="register-stat">
                                <span className="stat-number">150+</span>
                                <span className="stat-text">Influencers</span>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="register-form-panel">
                        <div className="form-card">
                            <div className="form-header">
                                <h3>Attendee Registration</h3>
                                <p>Fill out the form to register your interest</p>
                            </div>

                            <form onSubmit={handleSubmit} className="register-form" noValidate>
                                <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                    <label htmlFor="name">
                                        <User size={16} />
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={errors.name ? 'input-error' : ''}
                                    />
                                    {errors.name && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.name}
                                        </span>
                                    )}
                                </div>

                                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                    <label htmlFor="email">
                                        <Mail size={16} />
                                        Email Address <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@email.com"
                                        className={errors.email ? 'input-error' : ''}
                                    />
                                    {errors.email && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.email}
                                        </span>
                                    )}
                                </div>

                                <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                                    <label htmlFor="phone">
                                        <Phone size={16} />
                                        Phone / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 ..."
                                        className={errors.phone ? 'input-error' : ''}
                                    />
                                    {errors.phone && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.phone}
                                        </span>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                    >
                                        <option>Trader / Investor</option>
                                        <option>Influencer / YouTuber</option>
                                        <option>Broker Team</option>
                                        <option>Education Institute</option>
                                        <option>Media</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">
                                        <MessageSquare size={16} />
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what you need..."
                                        rows={4}
                                    />
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
                                            Send Registration Inquiry
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>

                                <p className="form-note">
                                    <span className="required">*</span> Required fields
                                </p>
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

export default Register;
