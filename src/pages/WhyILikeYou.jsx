import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Zap, Wifi, Search, Smile, Moon } from 'lucide-react';
import './WhyILikeYou.css';

const reasons = [
    { id: 1, text: "You make my bad days disappear.", icon: <Zap color="#ffcc00" /> },
    { id: 2, text: "You are cuter than my sleep.", icon: <Moon color="#6c5ce7" /> },
    { id: 3, text: "I smile like an idiot because of you.", icon: <Smile color="#fdcb6e" /> },
    { id: 4, text: "My heart auto-connects to your WiFi.", icon: <Wifi color="#0984e3" /> },
    { id: 5, text: "Even Google can't search someone like you.", icon: <Search color="#00cec9" /> },
];

const WhyILikeYou = () => {
    const [activeReason, setActiveReason] = useState(null);

    const playSound = () => {
        const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-simple-game-countdown-921.mp3"); // gentle pop
        audio.play().catch(e => console.log("Audio play failed", e));
    };

    const handleReasonClick = (id) => {
        setActiveReason(id === activeReason ? null : id);
        if (id !== activeReason) playSound();
    };

    return (
        <div className="why-container">
            <div className="split-bg">
                <div className="left-side"></div>
                <div className="right-side"></div>
            </div>

            <h2 className="comic-title">Why I Like You! 🤨</h2>

            <div className="reasons-grid">
                {reasons.map((reason) => (
                    <motion.div
                        key={reason.id}
                        className={`reason-card ${activeReason === reason.id ? 'active' : ''}`}
                        onClick={() => handleReasonClick(reason.id)}
                        whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="icon-wrapper">
                            {reason.icon}
                        </div>
                        <p className="reason-text">{reason.text}</p>
                        {activeReason === reason.id && (
                            <motion.div
                                className="explosion"
                                initial={{ scale: 0, opacity: 1 }}
                                animate={{ scale: 2, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                💥
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {activeReason && (
                <motion.div
                    className="speech-bubble"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                >
                    <MessageCircle size={40} className="bubble-tail" />
                    <p>Strictly Scientific Facts! 🧪</p>
                </motion.div>
            )}
        </div>
    );
};

export default WhyILikeYou;
