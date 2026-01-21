import { useState } from 'react';
import { Calendar, Sun, Moon, Music, Award, Mic, Users, Coffee, Sparkles } from 'lucide-react';
import './Schedule.css';

const Schedule = () => {
    const [activeDay, setActiveDay] = useState(0);

    const days = [
        {
            day: 'Day 1',
            date: 'April 24, 2026',
            theme: 'Global Connect',
            focus: 'Opening • Networking • Brand Visibility',
            sessions: [
                { time: '09:00', title: 'Registration & Welcome Lounge', icon: <Coffee size={20} />, type: 'networking' },
                { time: '10:30', title: 'Grand Opening Ceremony', icon: <Sparkles size={20} />, type: 'ceremony' },
                { time: '11:30', title: 'Keynote: Future of Forex & Crypto', icon: <Mic size={20} />, type: 'keynote' },
                { time: '13:00', title: 'Networking Lunch', icon: <Users size={20} />, type: 'networking' },
                { time: '14:30', title: 'Exhibition Opens (50+ Booths)', icon: <Sun size={20} />, type: 'exhibition' },
                { time: '16:00', title: 'Broker & Institute Presentations', icon: <Mic size={20} />, type: 'presentation' },
            ],
            evening: {
                title: 'Welcome Cocktail Night',
                description: 'Live entertainment & informal networking at the beachfront venue',
                icon: <Music size={20} />
            }
        },
        {
            day: 'Day 2',
            date: 'April 25, 2026',
            theme: 'Innovation & Recognition',
            focus: 'Learning • Partnerships • Awards',
            sessions: [
                { time: '09:00', title: 'Masterclasses by Industry Experts', icon: <Mic size={20} />, type: 'masterclass' },
                { time: '11:00', title: 'Panel: Brokers, Traders & Influencers', icon: <Users size={20} />, type: 'panel' },
                { time: '13:00', title: 'Networking Lunch & Coffee Sessions', icon: <Coffee size={20} />, type: 'networking' },
                { time: '14:30', title: 'IB & Affiliate Networking', icon: <Users size={20} />, type: 'networking' },
                { time: '16:00', title: 'Influencer & YouTuber Meet-ups', icon: <Users size={20} />, type: 'meetup' },
                { time: '17:30', title: 'Media Interviews & Brand Shoots', icon: <Mic size={20} />, type: 'media' },
            ],
            evening: {
                title: 'Elite Trader & Broker Awards Gala',
                description: 'Black-tie awards ceremony with live Bollywood/International performance, luxury dinner & cocktails',
                icon: <Award size={20} />
            }
        },
        {
            day: 'Day 3',
            date: 'April 26, 2026',
            theme: 'Community & Farewell',
            focus: 'Future Vision • Celebration',
            sessions: [
                { time: '09:00', title: 'Closing Keynotes & Market Outlook', icon: <Mic size={20} />, type: 'keynote' },
                { time: '11:00', title: 'Education Institute Workshops', icon: <Mic size={20} />, type: 'workshop' },
                { time: '13:00', title: 'Lunch & Final Networking', icon: <Coffee size={20} />, type: 'networking' },
                { time: '14:30', title: 'Future of Trading Ecosystem Panel', icon: <Users size={20} />, type: 'panel' },
                { time: '16:00', title: 'Closing Ceremony & Announcements', icon: <Sparkles size={20} />, type: 'ceremony' },
            ],
            evening: {
                title: 'Beach Party & Farewell',
                description: 'Open-air DJ night, beach party & farewell networking celebration',
                icon: <Moon size={20} />
            }
        }
    ];

    return (
        <section id="schedule" className="schedule section">
            <div className="container">
                <div className="section-header">
                    <span className="section-badge">
                        <Calendar size={16} />
                        Event Schedule
                    </span>
                    <h2 className="section-title">
                        Three Days of <span className="gradient-text">Excellence & Networking</span>
                    </h2>
                    <p className="section-subtitle">
                        A carefully curated program combining business, education, and luxury entertainment
                    </p>
                </div>

                {/* Day Tabs */}
                <div className="schedule-tabs">
                    {days.map((day, index) => (
                        <button
                            key={index}
                            className={`schedule-tab ${activeDay === index ? 'active' : ''}`}
                            onClick={() => setActiveDay(index)}
                        >
                            <span className="tab-day">{day.day}</span>
                            <span className="tab-date">{day.date}</span>
                        </button>
                    ))}
                </div>

                {/* Active Day Content */}
                <div className="schedule-content">
                    <div className="schedule-header-card">
                        <div className="schedule-theme">
                            <span className="theme-label">Theme</span>
                            <h3 className="theme-title">{days[activeDay].theme}</h3>
                            <p className="theme-focus">{days[activeDay].focus}</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="schedule-timeline">
                        <div className="timeline-day-label">
                            <Sun size={20} />
                            Day Sessions
                        </div>

                        {days[activeDay].sessions.map((session, index) => (
                            <div key={index} className={`timeline-item timeline-${session.type}`}>
                                <div className="timeline-time">{session.time}</div>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="timeline-icon">{session.icon}</div>
                                    <span className="timeline-title">{session.title}</span>
                                </div>
                            </div>
                        ))}

                        {/* Evening Event */}
                        <div className="timeline-evening">
                            <div className="timeline-day-label evening">
                                <Moon size={20} />
                                Evening Event
                            </div>
                            <div className="evening-card">
                                <div className="evening-icon">{days[activeDay].evening.icon}</div>
                                <div className="evening-content">
                                    <h4 className="evening-title">{days[activeDay].evening.title}</h4>
                                    <p className="evening-description">{days[activeDay].evening.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Schedule;
