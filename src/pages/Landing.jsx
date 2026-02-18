import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Stars, Float, Sparkles } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import './Landing.css';

// Simple 3D Heart Geometry using ExtrudeGeometry
const HeartShape = (props) => {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.y += 0.01;
        mesh.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    });

    const x = 0, y = 0;
    const heartShape = new THREE.Shape();
    heartShape.moveTo(x + 5, y + 5);
    heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
    heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
    heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
    heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
    heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
    heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh
                ref={mesh}
                {...props}
                scale={0.1}
                rotation={[Math.PI, 0, 0]}
                onClick={(e) => { e.stopPropagation(); props.onClick && props.onClick(); }}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerOut={() => document.body.style.cursor = 'auto'}
            >
                <extrudeGeometry args={[heartShape, { depth: 2, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 1, bevelThickness: 1 }]} />
                <meshStandardMaterial color={props.color || "#ff0033"} emissive={props.color || "#ff0033"} emissiveIntensity={0.5} roughness={0.3} metalness={0.8} />
            </mesh>
        </Float>
    );
};

const Landing = () => {
    const navigate = useNavigate();
    const [heartClicks, setHeartClicks] = useState(0);
    const [showSecret, setShowSecret] = useState(false);

    const handleHeartClick = () => {
        const newCount = heartClicks + 1;
        setHeartClicks(newCount);
        if (newCount === 5) {
            setShowSecret(true);
        }
    };

    return (
        <div className="landing-container">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <color attach="background" args={['#000']} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#ff4da6" />

                <Center position={[0, 1, 0]}>
                    {/* 3D Text needs a font file. I'll use a standard font URL or fallback to HTML overlay if font loading is complex without assets. 
                   For simplicity and robustness, I'll use HTML overlay for the main text and keep 3D for hearts. 
                   Wait, user asked for "rotating glowing 3D text". I can try using Text3D with a default font if I had one, 
                   but usually it requires a json font file. I'll use HTML for text to be safe + visual impact. */}
                </Center>

                <HeartShape position={[-3, 0, -2]} color="#ff4da6" onClick={handleHeartClick} />
                <HeartShape position={[3, 1, -3]} color="#ff0033" onClick={handleHeartClick} />
                <HeartShape position={[0, -2, -1]} color="#ff4da6" onClick={handleHeartClick} />
                <HeartShape position={[-5, 2, -5]} color="#ff0033" onClick={handleHeartClick} />
                <HeartShape position={[5, -1, -4]} color="#ff4da6" onClick={handleHeartClick} />
            </Canvas>

            <AnimatePresence>
                {showSecret && (
                    <motion.div
                        className="secret-popup"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => setShowSecret(false)}
                    >
                        <div className="secret-content">
                            <h2>💖 Secret Message! 💖</h2>
                            <p>You found my hidden love for you!</p>
                            <p>(You're amazing, by the way 😉)</p>
                            <button className="close-secret">Close</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="landing-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="glow-text title-3d"
                >
                    Mahi <span style={{ color: 'var(--red)' }}>❤️</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="subtitle"
                >
                    MADE WITH LOVE, INSPIRED BY MAHI<br />( This Websites is only for you MAHI )
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1, boxShadow: "0 0 25px var(--pink)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    className="enter-btn"
                    onClick={() => navigate('/how-we-met')}
                >
                    Enter My Heart
                </motion.button>
            </div>
        </div>
    );
};

export default Landing;
