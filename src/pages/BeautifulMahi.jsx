import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import './BeautifulMahi.css';

// 1. DYNAMICALLY LOAD ALL IMAGES FROM THE FOLDER
const modules = import.meta.glob('../assets/mahi_photos/*', { eager: true });

const PhotoItem = ({ src, effect, text, delay }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={`photo-item ${effect}`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: delay }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="img-container">
                <img
                    src={src}
                    alt="Beautiful"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="overlay"></div>
                <motion.div className="heart-particles" whileHover={{ opacity: 1 }}>
                    <Heart fill="white" size={20} className="p1" />
                    <Heart fill="white" size={15} className="p2" />
                    <Heart fill="white" size={25} className="p3" />
                </motion.div>
            </div>
            <p className="photo-text">{text}</p>
        </motion.div>
    );
};

const BeautifulMahi = () => {
    // 2. CONVERT MODULES TO IMAGE SOURCE ARRAY
    const imageList = Object.keys(modules).map(key => modules[key].default);

    // Captions to cycle through
    const captions = [
        "The Queen Herself 👑",
        "Pure Perfection ❤️",
        "My Happy Place ✨",
        "Forever & Always 🌹",
        "Definition of Beauty 😍",
        "Stole My Heart 💖",
        "Mahi... Just Wow.",
        "Your Smile > Everything"
    ];

    return (
        <div className="beautiful-container">
            <div className="star-field"></div>

            <motion.h2
                className="page-title neon-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                The Beautiful Mahi 🌹
            </motion.h2>

            <div className="gallery">
                {imageList.length > 0 ? (
                    imageList.map((imgSrc, index) => (
                        <div key={index} className="photo-wrapper">
                            <PhotoItem
                                src={imgSrc}
                                effect={index % 2 === 0 ? "glow" : "bnw-cinematic"}
                                text={captions[index % captions.length]}
                                delay={0.1 * index}
                            />
                        </div>
                    ))
                ) : (
                    <div className="no-photos-msg">
                        <h3>No Photos Yet! 😢</h3>
                        <p>I have opened a folder on your screen.</p>
                        <p><strong>Drag & Drop Mahi's photos there!</strong></p>
                        <br />
                        <p style={{ fontSize: '0.8rem', color: 'grey' }}>
                            (Reload this page after adding photos)
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BeautifulMahi;
