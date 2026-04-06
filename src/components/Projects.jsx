import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'QAI - Agencia de IA',
    description:
      'Agencia especializada en automatización con IA para empresas y profesionales. Desarrollo de agentes, workflows con n8n, soluciones RAG y sistemas conversacionales a medida.',
    stack: ['n8n', 'Python', 'RAG', 'OpenAI', 'Google Gemini', 'FastAPI'],
    live: 'https://qai.com.ar',
   
  },
  {
    title: 'ARKHOS - Plataforma Institucional + IA',
    description:
      'Sitio web completo para la Asociación Mutual de Arquitectos del Distrito 5. Diseño moderno, blog, formularios de contacto, gestión de membresías y un agente inteligente para responder preguntas y gestionar consultas.',
    stack: ['Next.js', 'Tailwind CSS', 'PostgreSQL', 'n8n'],
    live: 'https://arkhos.com.ar',
  },
  {
    title: 'FitFlow - Sistema de Gestión de Gimnasios',
    description:
      'Sistema integral para gimnasios. Gestión de socios, reservas, clases, pasarela de pagos, estadísticas con dashboard y WebSockets en tiempo real.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'WebSockets'],
    github: 'https://github.com/santino-quiroga/gestion-de-gym',
    demo: 'https://fitflow-ovbg.onrender.com/',
  },
  {
    title: 'Sistema Operativo Distribuido',
    description:
      'TP de Sistemas Operativos (UTN.BA) implementado en C. Simula componentes de un SO moderno con módulos distribuidos: Master, Worker, Storage y Query Control, comunicados vía sockets.',
    stack: ['C', 'Sockets', 'Makefile', 'Linux', 'UTN.BA'],
    github: 'https://github.com/santino-quiroga/sistema-operativo-distribuido',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function ProjectCard({ project }) {
  const isFeatured = project.featured
  const hasLive = project.live || project.demo

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`group relative rounded-xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 ${
        isFeatured
          ? 'md:col-span-2 border-accent/30 hover:border-accent/50'
          : 'border-white/5 hover:border-white/15'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <div className="flex items-center gap-2 shrink-0">
          {hasLive && (
            <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
              Live 🟢
            </span>
          )}
        </div>
      </div>

      <p className="text-neutral-400 text-sm leading-relaxed mb-5">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Live site"
          >
            <FiExternalLink size={18} />
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Demo"
          >
            <FiExternalLink size={18} />
          </a>
        )}
      </div>

      {isFeatured && (
        <div className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
          Destacado
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold text-white mb-16 text-center"
        >
          Proyectos
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
