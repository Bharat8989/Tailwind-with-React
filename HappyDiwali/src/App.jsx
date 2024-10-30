'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Component() {
  const [fireworks, setFireworks] = useState([])

  // Add random fireworks
  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks(prev => {
        if (prev.length > 5) {
          return prev.slice(1)
        }
        return [...prev, Math.random()]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 to-black p-6 text-center">
      {/* Background sparkles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-yellow-200"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-4 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
        >
          ✨ Happy Diwali! ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 max-w-lg text-lg text-yellow-100 md:text-2xl"
        >
         Wishing you a Diwali filled with love, laughter, and endless blessings.
        </motion.p>

        {/* Animated Diyas */}
        <div className="flex justify-center space-x-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
              className="relative"
            >
              <motion.span
                className="text-5xl"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                🪔
              </motion.span>
              <motion.div
                className="absolute -top-4 left-1/2 h-4 w-4 -translate-x-1/2"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <span className="text-2xl">✨</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Animated Fireworks */}
      <AnimatePresence>
        {fireworks.map((id, index) => (
          <motion.div
            key={id}
            initial={{ scale: 0, y: 500, x: -200 + Math.random() * 400 }}
            animate={{ scale: 1, y: -100 + Math.random() * -200 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute text-6xl"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 0.8], rotate: [0, 45, -45] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              🎆
            </motion.span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
