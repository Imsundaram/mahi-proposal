import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Ghost, Smile, Zap } from 'lucide-react';
import './HowWeMet.css';

const FunnyStory = () => {
    const [level, setLevel] = useState(1);

    const nextLevel = () => {
        if (level < 3) setLevel(level + 1);
    };

    return (
        <div className="funny-story-container">
            <div className="game-ui">
                <h2 className="pixel-title">Level {level}: The Beginning 🎮</h2>

                <div className="game-screen">
                    {level === 1 && (
                        <motion.div
                            className="level-content"
                            initial={{ x: -300 }}
                            animate={{ x: 0 }}
                        >
                            <h3>Mission: Find The Girl</h3>
                            <div className="photo-frame">
                                {/* Replace src with your actual image path */}
                                <img src="/assets/mahi_2.jpg" alt="Target Acquired" onError={(e) => e.target.src = 'https://media.giphy.com/media/l0HlHJGHe3yAMhdQY/giphy.gif'} />
                            </div>
                            <p className="game-text">
                                Player 1 (Me) spotted a wild cutie.<br />
                                Status: Nervous. <br />
                                Action: Say "Hi" like a normal human.
                            </p>
                            <button className="game-btn" onClick={nextLevel}>Attempt Interaction ▶</button>
                        </motion.div>
                    )}

                    {level === 2 && (
                        <motion.div
                            className="level-content"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                        >
                            <h3>Mission: Don't Mess Up</h3>
                            <div className="photo-frame">
                                {/* Replace src with your actual image path */}
                                <img src="/assets/mahi_3.jpg" alt="Chaos" onError={(e) => e.target.src = 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVyM/giphy.gif'} />
                            </div>
                            <p className="game-text">
                                She didn't know...<br />
                                She just accidentally unlcocked the "Boyfriend" DLC.<br />
                                (No refunds available 😌)
                            </p>
                            <button className="game-btn" onClick={nextLevel}>Confirm Relationship ▶</button>
                        </motion.div>
                    )}

                    {level === 3 && (
                        <motion.div
                            className="level-content"
                            initial={{ y: 300 }}
                            animate={{ y: 0 }}
                        >
                            <h3>Mission Accomplished! 🏆</h3>
                            <div className="achievement-unlocked">
                                <Heart size={50} color="red" fill="red" />
                                <p>Achievement: FOUND MY PERSON</p>
                            </div>
                            <p className="game-text">
                                It feels like I've known her forever.<br />
                                High Score: ∞
                            </p>
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ repeat: Infinity }}
                            >
                                <Ghost size={40} color="purple" style={{ margin: '10px' }} />
                                <Zap size={40} color="yellow" style={{ margin: '10px' }} />
                                <Smile size={40} color="orange" style={{ margin: '10px' }} />
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FunnyStory;
