import { motion } from 'framer-motion'
import './RenoGradeHero.css'

export default function RenoGradeHero() {
  return (
    <section className="reno-grade-hero">
      <div className="reno-grade-hero__inner">
        <motion.h1
          className="reno-grade-hero__title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="reno-grade-hero__title-line reno-grade-hero__title-orange">No Cost. No Obligation.</span>
          <span className="reno-grade-hero__title-line reno-grade-hero__title-dark">Big Insight.</span>
        </motion.h1>
        <motion.p
          className="reno-grade-hero__subtitle"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Learning what buyers want after they list.
        </motion.p>
        <motion.p
          className="reno-grade-hero__desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Reno-Grade shows you first so you list with confidence and control.
        </motion.p>
      </div>
    </section>
  )
}
