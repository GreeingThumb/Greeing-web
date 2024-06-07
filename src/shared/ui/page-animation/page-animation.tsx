import { motion } from 'framer-motion'
import type { ReactElement } from 'react'

interface PageAnimationProps {
  children: ReactElement
}

const PageAnimation = ({ children }: PageAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.1 }}
    >
      {children}
    </motion.div>
  )
}

export default PageAnimation
