import { motion } from 'framer-motion'
import {
  SiPython, SiReact, SiDocker, SiPostgresql, SiGit,
  SiFlask, SiTailwindcss, SiOpenai, SiGooglegemini,
  SiSupabase,
} from 'react-icons/si'
import { VscFileCode, VscAzure } from 'react-icons/vsc'
import { HiCpuChip } from 'react-icons/hi2'
import { FiDatabase, FiRepeat, FiMessageSquare, FiZap } from 'react-icons/fi'
import { SiFastapi } from 'react-icons/si'
import { TbBrain } from 'react-icons/tb'

const categories = [
  {
    title: 'AI & Automation',
    items: [
      { name: 'n8n', icon: FiRepeat },
      { name: 'Python', icon: SiPython },
      { name: 'RAG', icon: HiCpuChip },
      { name: 'OpenAI API', icon: SiOpenai },

      { name: 'Machine Learning', icon: TbBrain },
      { name: 'Deep Learning', icon: FiZap },
      { name: 'NLP', icon: FiMessageSquare },
    ],
  },
  {
    title: 'Cloud & Deploy',
    items: [
      { name: 'Azure', icon: VscAzure },
      { name: 'Pinecone', icon: FiDatabase },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Docker', icon: SiDocker },
    ],
  },
  {
    title: 'Dev',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Git', icon: SiGit },
    ],
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold text-white mb-16 text-center"
        >
          Tecnologías
        </motion.h2>

        <div className="space-y-12">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 hover:border-accent/30 hover:text-white transition-all duration-200"
                    >
                      <Icon className="text-base" />
                      {item.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
