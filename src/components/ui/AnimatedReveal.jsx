import { motion } from 'framer-motion'

export default function AnimatedReveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        amount: 0.15
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
    >

      {children}

    </motion.div>

  )

}