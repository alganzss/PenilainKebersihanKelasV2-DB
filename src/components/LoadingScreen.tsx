import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import minecraftLogo from 'figma:asset/5e6d496262e1d3516c51e72b7f5618db124b9948.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          // Smooth progress increment
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(timer);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #075985 100%)',
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%),
              linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center space-y-12 z-10">
        {/* Minecraft Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center space-y-8"
        >
          {/* Minecraft Logo Image */}
          <div className="relative">
            <motion.img
              src={minecraftLogo}
              alt="Minecraft"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="select-none w-80 md:w-96 h-auto"
              style={{
                filter: 'drop-shadow(4px 4px 0px rgba(0,0,0,0.8)) drop-shadow(0px 0px 15px rgba(255,255,255,0.2))',
                imageRendering: 'crisp-edges',
              }}
            />
            
            {/* Glow effect */}
            <motion.img
              src={minecraftLogo}
              alt=""
              className="absolute inset-0 w-80 md:w-96 h-auto blur-lg"
              style={{
                imageRendering: 'crisp-edges',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Plugin Developer subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-white/80 tracking-wider"
            style={{
              fontFamily: 'monospace',
              fontSize: '14px',
              letterSpacing: '2px',
            }}
          >
            PLUGIN DEVELOPER
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-80 md:w-96 space-y-3"
        >
          {/* Progress bar container */}
          <div className="relative h-2 bg-black/40 rounded-sm overflow-hidden border border-black/60">
            {/* Progress fill */}
            <motion.div
              className="h-full bg-white relative"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
          </div>

          {/* Loading percentage text */}
          <motion.div
            className="text-center text-white/60 tracking-wide"
            style={{
              fontFamily: 'monospace',
              fontSize: '12px',
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Loading... {Math.round(Math.min(progress, 100))}%
          </motion.div>
        </motion.div>
      </div>

      {/* GGRPG Studios branding */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0.8] }}
        transition={{ 
          duration: 2,
          times: [0, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <p
          className="text-white/50 tracking-widest"
          style={{
            fontFamily: 'monospace',
            fontSize: '11px',
            letterSpacing: '3px',
          }}
        >
          GGRPG STUDIOS
        </p>
      </motion.div>

      {/* Decorative corner blocks */}
      {[
        { top: '20px', left: '20px' },
        { top: '20px', right: '20px' },
        { bottom: '20px', left: '20px' },
        { bottom: '20px', right: '20px' },
      ].map((position, index) => (
        <motion.div
          key={index}
          className="absolute w-6 h-6 border-2 border-white/10"
          style={{
            ...position,
            imageRendering: 'pixelated',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
}
