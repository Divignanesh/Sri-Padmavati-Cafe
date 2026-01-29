import Header from '../components/Header'
import RenoGradeHero from '../components/RenoGradeHero'
import RenoGradeFormSection from '../components/RenoGradeFormSection'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function RenoGradePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <RenoGradeHero />
        <RenoGradeFormSection />
        <section id="contact">
          <CTA />
        </section>
        <Footer />
      </main>
    </div>
  )
}
