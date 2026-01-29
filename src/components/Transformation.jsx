import { motion } from 'framer-motion'
import { AnimatedSection } from './AnimatedSection'
import './Transformation.css'

const stats = [
  { value: '$18,500', label: 'Investment' },
  { value: '$52,000', label: 'Value Increase' },
  { value: '4 days', label: 'To Sell' },
]

export default function Transformation() {
  return (
    <AnimatedSection className="transformation">
      <div className="transformation__inner">
        <div className="transformation__header">
          <motion.h2
            className="transformation__title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            See The Transformation
          </motion.h2>
          <motion.p
            className="transformation__subtitle"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Strategic renovations that dramatically increase home value and sell faster
          </motion.p>
        </div>
        <motion.div
          className="transformation__images"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="transformation__image-card transformation__image-card--before">
            <span className="transformation__image-label">Before</span>
          </div>
          <div className="transformation__image-card transformation__image-card--after">
            <span className="transformation__image-label">After</span>
          </div>
        </motion.div>
        <p className="transformation__section-label">Kitchen Transformation</p>
        <div className="transformation__stats">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="transformation__stat"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="transformation__stat-value">{stat.value}</span>
              <span className="transformation__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
