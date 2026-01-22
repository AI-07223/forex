import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'How do I register for the Elite Traders Summit 2026?',
            answer: 'You can register through our official website by clicking the "Register Now" button. Select your participation category (Trader, Broker, Sponsor, etc.) and complete the registration form. Our team will contact you within 48 hours to confirm your participation.'
        },
        {
            question: 'Is this an open public event?',
            answer: 'No, Elite Traders Summit is an exclusive, invitation-only event. Unlike public expos, we focus on quality over quantity, ensuring every participant is a decision-maker or serious market contributor. All registrations are reviewed before approval.'
        },
        {
            question: 'What sponsorship options are available?',
            answer: 'We offer multiple sponsorship tiers: Title Sponsor ($100,000), Platinum ($50,000), Gold ($25,000), Silver ($11,000), Education Partner ($5,000), and Participation Partner ($3,000). Each tier includes different benefits like booth space, speaking slots, and branding opportunities.'
        },
        {
            question: 'What is included in the registration fee?',
            answer: 'Your registration includes access to all 3 days of the summit, exhibition hall access, networking sessions, keynote speeches, panels and workshops, refreshments, and evening event access (Welcome Cocktail, Awards Gala, Beach Party).'
        },
        {
            question: 'Can I get accommodation at Royal Cliff?',
            answer: 'Yes! We have negotiated special rates for summit attendees at Royal Cliff Beach Resort. Accommodation packages include premium rooms, breakfast, and exclusive access to hotel facilities. Contact us for package details.'
        },
        {
            question: 'Will there be opportunities for media coverage?',
            answer: 'Absolutely! We have 100+ influencers and media partners covering the event. Sponsors receive media interviews, professional photography, and feature in our official aftermovie. All participants can access content creation zones.'
        },
        {
            question: 'What is the Elite Trader Awards Gala?',
            answer: 'The Awards Gala is a prestigious black-tie ceremony on Day 2 evening, celebrating excellence in the trading industry. Categories include Best Forex Broker, Best Crypto Exchange, Trader of the Year, and more. It includes live entertainment, luxury dinner, and cocktails.'
        },
        {
            question: 'How can I become a speaker or panelist?',
            answer: 'Speaking opportunities are available through sponsorship packages (Platinum and above) or by invitation. If you\'re an industry expert interested in speaking, please contact our team with your credentials and proposed topic.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="faq section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <HelpCircle size={16} />
                        FAQ
                    </span>
                    <h2 className="section-title">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>
                    <p className="section-subtitle">
                        Everything you need to know about the Elite Traders Summit 2026
                    </p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown className="faq-icon" size={20} />
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>Still have questions?</p>
                    <a href="#register" className="btn btn-secondary">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
