import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart } from 'lucide-react';
import './Proposal.css';

const Proposal = () => {
    const [step, setStep] = useState(0); // 0: Name, 1: Message, 2: Question, 3: YES!
    const [noBtnPosition, setNoBtnPosition] = useState({ top: '60%', right: '30%' });
    const audioRef = useRef(null); // Background music
    const celebrationAudioRef = useRef(null); // Celebration music

    const handleNextStep = () => {
        if (step < 2) {
            setStep(step + 1);
            // Try to play background music on interaction
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.volume = 0.4;
                audioRef.current.play().catch(e => console.log("Audio play failed", e));
            }
        }
    };

    const fireConfetti = () => {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    };

    const handleYes = () => {
        setStep(3);
        fireConfetti();
        if (audioRef.current) audioRef.current.pause();
        if (celebrationAudioRef.current) celebrationAudioRef.current.play().catch(e => console.log(e));
    };

    const moveNoButton = () => {
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10;
        setNoBtnPosition({ top: `${y}%`, left: `${x}%`, right: 'auto', bottom: 'auto' });
    };

    return (
        <div className="proposal-container" onClick={handleNextStep}>
            <audio ref={audioRef} loop src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-fears-227.mp3" />
            <audio ref={celebrationAudioRef} src="https://assets.mixkit.co/music/preview/mixkit-wedding-bells-colors-223.mp3" />

            <div className="spotlight"></div>

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.h1
                        key="name"
                        className="big-name"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
                        transition={{ duration: 2 }}
                    >
                        Mahi...
                    </motion.h1>
                )}

                {step === 1 && (
                    <motion.div
                        key="message"
                        className="message-box"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 1.5 }}
                    >
                        <p>"I don't know what the future holds…<br />But I know I want you in it."</p>
                        <p className="click-hint">(Click to continue)</p>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="proposal"
                        className="proposal-box"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                    >
                        <h2 className="question">Will You Be Mine?</h2>
                        <div className="actions">
                            <button className="yes-btn" onClick={(e) => { e.stopPropagation(); handleYes(); }}>
                                YES ❤️
                            </button>
                            <button
                                className="no-btn"
                                style={{ position: 'absolute', ...noBtnPosition }}
                                onMouseEnter={moveNoButton}
                                onClick={(e) => { e.stopPropagation(); moveNoButton(); }}
                            >
                                Let me think 💔
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="success"
                        className="success-screen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <h1>She Said YES! 🎉</h1>
                        <p>Now you are my official girlfriend ❤️</p>
                        <div className="hearts-rain">
                            {[...Array(50)].map((_, i) => (
                                <Heart key={i} className="falling-heart" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }} fill="white" />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Proposal;
