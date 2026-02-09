import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Premium cinematic page loader component
 * Features: Paper plane animation, multilingual greetings, orbital motion, smooth transitions
 */
const PageLoader = ({ 
  onComplete,
  texts = ['Hello', 'Namaste', '你好'],
  planeColor = '#ffffff',
  textColor = '#ffffff',
  duration = 6000,
  showOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showOrbitalAnimation, setShowOrbitalAnimation] = useState(false);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    // Check if loader should show (only on first visit)
    const hasVisited = localStorage.getItem('has-visited');
    if (showOnce && hasVisited) {
      return;
    }

    setIsVisible(true);
    
    // Mark as visited
    if (showOnce) {
      localStorage.setItem('has-visited', 'true');
    }

    // Animation timeline
    const timeline = async () => {
      // Phase 1: Initial state (black screen)
      await new Promise(resolve => setTimeout(resolve, 500));

      // Phase 2: Paper plane enters from left with natural curve
      setCurrentTextIndex(0);
      await new Promise(resolve => setTimeout(resolve, 800));

      // Phase 3: Sequential text appearance with stagger
      for (let i = 0; i < texts.length; i++) {
        setCurrentTextIndex(i);
        await new Promise(resolve => setTimeout(resolve, 600));
      }

      // Phase 4: Orbital animation around text
      setShowOrbitalAnimation(true);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Phase 5: Plane exits upward
      setExitAnimation(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Phase 6: Black screen slides up to reveal content
      await new Promise(resolve => setTimeout(resolve, 800));

      // Complete animation and unmount
      setIsVisible(false);
      onComplete?.();
    };

    timeline();
  }, [showOnce, texts, duration, onComplete]);

  if (!isVisible) return null;

  // Paper plane SVG component
  const PaperPlane = ({ className = '', style = {} }) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7 4a2 2 0 0 0-1 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 1 0l7-4A2 2 0 0 0 21 16z"
        fill={planeColor}
        stroke="none"
      />
    </svg>
  );

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: '-100vh',
            transition: { 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }
          }}
        >
          {/* Animated background gradient for depth */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, #1a1a2e 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, #16213e 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, #0f3460 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Paper plane with orbital animation */}
          <motion.div
            className="absolute"
            initial={{ 
              x: '-200px', 
              y: '0px',
              rotate: '-15deg',
              scale: 0.8
            }}
            animate={
              showOrbitalAnimation
                ? {
                    // Orbital path around center text
                    rotate: [0, 360],
                    x: [
                      '0px', 
                      '150px', 
                      '0px', 
                      '-150px', 
                      '0px'
                    ],
                    y: [
                      '0px', 
                      '0px', 
                      '100px', 
                      '0px', 
                      '0px'
                    ],
                    scale: 1,
                  }
                : exitAnimation
                ? {
                    x: '0px',
                    y: '-300px',
                    rotate: '45deg',
                    scale: 0.5,
                    opacity: 0
                  }
                : {
                    x: '0px',
                    y: '0px',
                    rotate: '0deg',
                    scale: 1,
                  }
            }
            transition={
              showOrbitalAnimation
                ? {
                    x: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
                    y: { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] },
                    rotate: { duration: 2, ease: "linear" },
                    scale: { duration: 0.5, ease: "easeOut" }
                  }
                : exitAnimation
                ? {
                    x: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
                    y: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
                    rotate: { duration: 1, ease: "easeIn" },
                    scale: { duration: 1, ease: "easeIn" },
                    opacity: { duration: 0.8, ease: "easeOut" }
                  }
                : {
                    x: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
                    y: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
                    rotate: { duration: 1.2, ease: "easeOut" },
                    scale: { duration: 0.8, ease: "easeOut" }
                  }
            }
          >
            <PaperPlane />
          </motion.div>

          {/* Central text container */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut" 
            }}
          >
            {/* Animated text with stagger effect */}
            <AnimatePresence mode="wait">
              <motion.div
                className="text-6xl font-light tracking-wide"
                style={{ color: textColor }}
                key={currentTextIndex}
                initial={{ 
                  opacity: 0, 
                  y: 20,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  y: -20,
                  scale: 0.8
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
              >
                {texts[currentTextIndex]}
              </motion.div>
            </AnimatePresence>

            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 blur-xl"
              style={{ 
                background: `radial-gradient(circle, ${textColor}20 0%, transparent 70%)`,
                filter: 'blur(20px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>

          {/* Particle effects for premium feel */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -20, -40]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
