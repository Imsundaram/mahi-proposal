import React from 'react';
import { motion } from 'framer-motion';
import { Map, Heart, Plane, Coffee, Home, Clock } from 'lucide-react';
import './FuturePlans.css';

const PlanItem = ({ icon, title, status, desc, delay }) => (
    <motion.div
        className="plan-card"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: delay, duration: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(50, 255, 255, 0.5)" }}
    >
        <div className="icon-box">{icon}</div>
        <div className="plan-content">
            <h3>{title}</h3>
            <p className="plan-desc">{desc}</p>
            <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
        </div>
    </motion.div>
);

const FuturePlans = () => {
    return (
        <div className="future-container">
            <div className="bg-stars"></div>

            <motion.h2
                className="roadmap-title"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Our Roadmap 🗺️
            </motion.h2>

            <div className="content-grid">
                <motion.div
                    className="main-image-wrapper"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* User to add their couple photo here */}
                    <img src="/assets/mahi_future.jpg" alt="Our Future" className="future-img" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} />
                    <div className="glow-ring"></div>
                </motion.div>

                <div className="plans-list">
                    <PlanItem
                        icon={<Heart color="#ff4da6" />}
                        title="Phase 1: Be Cute Together"
                        status="Completed ✅"
                        desc="Successfully found each other in this chaotic universe."
                        delay={1}
                    />
                    <PlanItem
                        icon={<Coffee color="#ffd700" />}
                        title="Phase 2: Endless Dates"
                        status="In Progress 🔄"
                        desc="Coffee, movies, and late night discussions about nothing."
                        delay={1.2}
                    />
                    <PlanItem
                        icon={<Plane color="#00d2ff" />}
                        title="Phase 3: World Tour"
                        status="Planned 🌍"
                        desc="Getting lost in new cities together."
                        delay={1.4}
                    />
                    <PlanItem
                        icon={<Home color="#33ff33" />}
                        title="Phase 4: Grow Old"
                        status="Locked 🔒"
                        desc="Requires 'Saying Yes' to unlock this level."
                        delay={1.6}
                    />
                </div>
            </div>
        </div>
    );
};

export default FuturePlans;
