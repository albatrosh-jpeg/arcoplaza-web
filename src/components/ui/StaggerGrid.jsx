import { motion } from 'framer-motion'

export default function StaggerGrid({
  children,
  className = ''
}) {

  return (

    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08
          }
        }
      }}
    >

      {children}

    </motion.div>

  )

}