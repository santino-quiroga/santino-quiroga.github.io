import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

const roles = ['AI Engineer', 'Automation Builder', 'Agentic Systems']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!deleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-neutral-400 text-lg mb-3"
        >
          Hola 👋, soy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight"
        >
          Santino Quiroga
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 h-10"
        >
          <span className="text-2xl sm:text-3xl font-semibold text-accent">
            {text}
          </span>
          <span className="inline-block w-0.5 h-7 bg-accent ml-1 animate-pulse align-middle" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-neutral-400 text-lg max-w-xl"
        >
          Transformo procesos manuales en workflows inteligentes con IA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-light text-white font-medium rounded-lg transition-colors duration-200"
          >
            Ver Proyectos
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 border border-white/10 text-neutral-300 hover:text-white hover:border-white/25 rounded-lg transition-all duration-200"
          >
            Contactame
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-neutral-500 text-xl" />
        </motion.div>
      </motion.a>
    </section>
  )
}
