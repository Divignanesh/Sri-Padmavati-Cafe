import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedSection({
  children,
  className = '',
  variants = defaultVariants,
  transition = { duration: 0.5, ease: 'easeOut' },
  once = true,
  amount = 0.15,
  id,
  ...props
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export function AnimatedDiv({
  children,
  className = '',
  variants = defaultVariants,
  transition = { duration: 0.5 },
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ ...transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
