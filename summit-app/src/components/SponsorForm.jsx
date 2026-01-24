import { useState } from 'react';
import { Building2, User, Mail, Phone, MessageSquare, Send, ArrowRight, CheckCircle, Award, Users, Megaphone, AlertCircle } from 'lucide-react';
import Toast from './Toast';
import { FORM_CONFIG, isBackendConfigured } from '../config/formConfig';
import './SponsorForm.css';

const SponsorForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        contactPerson: '',
        email: '',
        phone: '',
        package: 'Title Sponsor ($100,000)',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

    const validateForm = () => {
        const newErrors = {};

        // Company validation
        if (!formData.company.trim()) {
            newErrors.company = 'Company/Brand name is required';
        }

        // Contact person validation
        if (!formData.contactPerson.trim()) {
            newErrors.contactPerson = 'Contact person name is required';
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
                subject: `Sponsor Inquiry - ${formData.package} - ${formData.company}`,
                from_name: formData.contactPerson,
                company: formData.company,
                contact_person: formData.contactPerson,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                selected_package: formData.package,
                message: formData.message || 'No message',
                form_type: 'Sponsor Inquiry'
            })
        });

        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || 'Form submission failed');
        }
        return result;
    };

    const submitViaEmail = () => {
        const subject = encodeURIComponent(`Sponsor Inquiry - ${formData.package} - ${formData.company}`);
        const body = encodeURIComponent(
            `Company/Brand: ${formData.company}\n` +
            `Contact Person: ${formData.contactPerson}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Selected Package: ${formData.package}\n` +
            `Message: ${formData.message || 'No message'}`
        );
        window.location.href = `mailto:${FORM_CONFIG.CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    const resetForm = () => {
        setFormData({
            company: '',
            contactPerson: '',
            email: '',
            phone: '',
            package: 'Title Sponsor ($100,000)',
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
                    message: 'Sponsor inquiry submitted successfully! We\'ll contact you soon.',
                    type: 'success'
                });
                resetForm();
            } else {
                // Fallback to email client
                submitViaEmail();
                setTimeout(() => {
                    setToast({
                        visible: true,
                        message: 'Email client opened! Please send the email to complete your inquiry.',
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

    const benefits = [
        { icon: Users, text: 'Direct access to curated traders & influencers' },
        { icon: Award, text: 'IB recruitment & partnership matchmaking' },
        { icon: Megaphone, text: 'Stage authority + brand trust' },
        { icon: CheckCircle, text: 'On-ground conversions + post-event content' }
    ];

    return (
        <section id="become-sponsor" className="sponsor-form section">
            <div className="container">
                <div className="sponsor-header">
                    <span className="section-badge">
                        <Building2 size={16} />
                        Become a Sponsor
                    </span>
                    <h2 className="section-title">
                        Secure Your Booth + <span className="gradient-text">Speaking Slot</span>
                    </h2>
                    <p className="section-subtitle">
                        Choose your package and request the official sponsorship deck. We'll respond with deliverables, slot options, and next steps.
                    </p>
                </div>

                <div className="sponsor-grid">
                    {/* Benefits Side */}
                    <div className="sponsor-benefits-panel">
                        <div className="benefits-card">
                            <div className="benefits-header">
                                <h3>Sponsor Benefits</h3>
                            </div>
                            <div className="benefits-list">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-item">
                                        <div className="benefit-icon">
                                            <benefit.icon size={20} />
                                        </div>
                                        <span>{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="packages-preview">
                            <h4>Available Packages</h4>
                            <div className="package-tags">
                                <span className="package-tag title">Title Sponsor</span>
                                <span className="package-tag platinum">Platinum</span>
                                <span className="package-tag gold">Gold</span>
                                <span className="package-tag silver">Silver</span>
                                <span className="package-tag">Exhibitor</span>
                                <span className="package-tag">Education Partner</span>
                                <span className="package-tag">Media Partner</span>
                            </div>
                        </div>

                        <div className="sponsor-cta-box">
                            <p>Need a custom package?</p>
                            <a href="tel:+917300415679" className="cta-link">
                                Call: +91 7300415679
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="sponsor-form-panel">
                        <div className="form-card">
                            <div className="form-header">
                                <h3>Sponsor Inquiry</h3>
                                <p>Brand / Broker / Project</p>
                            </div>

                            <form onSubmit={handleSubmit} className="sponsor-inquiry-form" noValidate>
                                <div className={`form-group ${errors.company ? 'has-error' : ''}`}>
                                    <label htmlFor="company">
                                        <Building2 size={16} />
                                        Company / Brand <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Brand name"
                                        className={errors.company ? 'input-error' : ''}
                                    />
                                    {errors.company && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.company}
                                        </span>
                                    )}
                                </div>

                                <div className={`form-group ${errors.contactPerson ? 'has-error' : ''}`}>
                                    <label htmlFor="contactPerson">
                                        <User size={16} />
                                        Contact Person <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="contactPerson"
                                        name="contactPerson"
                                        value={formData.contactPerson}
                                        onChange={handleChange}
                                        placeholder="Full name"
                                        className={errors.contactPerson ? 'input-error' : ''}
                                    />
                                    {errors.contactPerson && (
                                        <span className="error-message">
                                            <AlertCircle size={14} />
                                            {errors.contactPerson}
                                        </span>
                                    )}
                                </div>

                                <div className="form-row">
                                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                                        <label htmlFor="sponsorEmail">
                                            <Mail size={16} />
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="sponsorEmail"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@company.com"
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
                                        <label htmlFor="sponsorPhone">
                                            <Phone size={16} />
                                            Phone / WhatsApp
                                        </label>
                                        <input
                                            type="tel"
                                            id="sponsorPhone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+971 / +91 ..."
                                            className={errors.phone ? 'input-error' : ''}
                                        />
                                        {errors.phone && (
                                            <span className="error-message">
                                                <AlertCircle size={14} />
                                                {errors.phone}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="package">
                                        Select Package
                                    </label>
                                    <select
                                        id="package"
                                        name="package"
                                        value={formData.package}
                                        onChange={handleChange}
                                    >
                                        <option>Title Sponsor ($100,000)</option>
                                        <option>Platinum ($50,000)</option>
                                        <option>Gold ($25,000)</option>
                                        <option>Silver ($11,000)</option>
                                        <option>Exhibitor / Participation</option>
                                        <option>Education Institute Partner</option>
                                        <option>Media / Influencer Partner</option>
                                        <option>Custom Package</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="sponsorMessage">
                                        <MessageSquare size={16} />
                                        Message
                                    </label>
                                    <textarea
                                        id="sponsorMessage"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us your requirement..."
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
                                            Request Sponsorship Deck
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

export default SponsorForm;
