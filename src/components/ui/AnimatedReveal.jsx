import { motion } from 'framer-motion'

export default function AnimatedReveal({
  children,
  delay = 0,
  y = 12,
  duration = 0.38
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
        margin: '-40px'
      }}

      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >

      {children}

    </motion.div>

  )

}