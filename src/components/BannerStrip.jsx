import { motion } from 'framer-motion'
import './BannerStrip.css'

export default function BannerStrip() {
  return (
    <motion.section
      className="banner-strip"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="banner-strip__inner">
        <a href="#inquire" className="banner-strip__cta">
          CLICK TO UNLOCK YOUR HOME POTENTIAL
        </a>
      </div>
    </motion.section>
  )
}
