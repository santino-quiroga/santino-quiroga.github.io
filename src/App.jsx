import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
