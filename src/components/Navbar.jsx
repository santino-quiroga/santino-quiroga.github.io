import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'

const navLinks = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-extrabold text-accent tracking-tight">
          SQ
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setCvOpen(!cvOpen)}
              className="flex items-center gap-1 text-sm font-medium text-accent border border-accent/30 rounded-lg px-4 py-1.5 hover:bg-accent/10 transition-colors duration-200"
            >
              CV <FiChevronDown className={`transition-transform ${cvOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {cvOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 mt-2 w-40 bg-surface border border-white/10 rounded-lg overflow-hidden shadow-xl"
                >
                  <a href="/cv-es.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors">
                    🇪🇸 Español
                  </a>
                  <a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white transition-colors">
                    🇬🇧 English
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neutral-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-xl text-neutral-200 hover:text-accent transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex gap-3 mt-4">
              <a href="/cv-es.pdf" target="_blank" rel="noopener noreferrer" className="text-sm border border-accent/30 text-accent rounded-lg px-4 py-2 hover:bg-accent/10 transition-colors">
                CV 🇪🇸
              </a>
              <a href="/cv-en.pdf" target="_blank" rel="noopener noreferrer" className="text-sm border border-accent/30 text-accent rounded-lg px-4 py-2 hover:bg-accent/10 transition-colors">
                CV 🇬🇧
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
