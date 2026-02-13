import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpectacularLoader = ({ onComplete }) => {
  const [phase, setPhase] = useState("languages");
  const [textIndex, setTextIndex] = useState(0);

  const greetings = ["Hello", "Namaste", "Hola", "Bonjour", "Ciao", "Salaam"];

  useEffect(() => {
    // Start cinematic sequence (shows on EVERY reload)
    const cinematicSequence = async () => {
      // Phase 1: Language animation (3s - faster than before)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setPhase("welcome");

      // Phase 2: Welcome text display (1.5s - faster)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPhase("exit");

      // Phase 3: Curtain up animation (1s - faster)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Complete
      onComplete();
    };

    cinematicSequence();

    // Animate greetings during language phase - faster switching
    const greetingTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % greetings.length);
    }, 500); // Faster: 500ms instead of 800ms

    return () => {
      clearInterval(greetingTimer);
    };
  }, []);

  const getCinematicContent = () => {
    switch (phase) {
      case "languages":
        return (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Background - Same as Dashboard */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4">
              {/* Animated greeting text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="h-16 flex items-center justify-center"
              >
                {greetings.map((greeting, index) => (
                  <motion.span
                    key={greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === textIndex ? 1 : 0,
                      y: index === textIndex ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="text-3xl sm:text-4xl lg:text-5xl text-white/90 font-light absolute"
                  >
                    {greeting}
                  </motion.span>
                ))}
              </motion.div>

              {/* Subtle loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8"
              >
                <div className="flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/60 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "welcome":
        return (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated Background - Same as Dashboard */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative z-10 text-center px-4">
              {/* Welcome text - appears AFTER languages */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white"
              >
                <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 bg-clip-text text-transparent">
                  Welcome to OptimizedLeads
                </span>
              </motion.h1>

              {/* Subtle loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8"
              >
                <div className="flex justify-center space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white/60 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case "exit":
        return (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{
              opacity: 1,
              y: "-100%",
            }}
            transition={{
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1], // Custom ease-out for smooth curtain
            }}
            className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
          >
            {/* Animated Background - Same as Dashboard */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return <AnimatePresence>{getCinematicContent()}</AnimatePresence>;
};

export default SpectacularLoader;
