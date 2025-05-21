import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-radial from-secondary/5 via-primary to-primary min-h-screen w-full">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="home" className="min-h-screen flex items-center justify-center py-16 sm:py-20">
            <Hero />
          </section>

          <section id="about" className="py-16 sm:py-24">
            <About />
          </section>

          <section id="experience" className="py-16 sm:py-24">
            <Experience />
          </section>

          <section id="projects" className="py-16 sm:py-24">
            <Projects />
          </section>

          <section id="hackathons" className="py-16 sm:py-24">
            <Hackathons />
          </section>

          <section id="contact" className="py-16 sm:py-24">
            <Contact />
          </section>
        </main>
      </motion.div>
    </div>
  )
}

export default App
