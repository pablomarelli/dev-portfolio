import ThreeScene from './components/ThreeScene'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Awards } from './components/Awards'
import { Contact, Footer } from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Three.js particle background */}
      <ThreeScene />
      
      {/* Header with navigation */}
      <Header />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Awards />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
