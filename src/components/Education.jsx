import { motion } from 'framer-motion'
import { FiBookOpen, FiAward } from 'react-icons/fi'

const timeline = [
  {
    type: 'education',
    institution: 'Universidad Tecnológica Nacional (UTN.BA)',
    title: 'Ingeniería en Sistemas',
    period: '2023 – Presente',
    description:
      'Formación en C/C++, Python, Java, diseño de sistemas operativos, bases de datos, arquitecturas de software y metodologías ágiles (Scrum).',
  },
  // PLACEHOLDER: Agregar certificaciones aquí con el siguiente formato:
  // {
  //   type: 'certification',
  //   institution: 'Nombre de la institución',
  //   title: 'Nombre del curso / certificación',
  //   period: 'Fecha',
  //   description: 'Descripción corta',
  //   skills: ['Skill 1', 'Skill 2'],
  // },
  // Diplomado en Python para IA (UTN.BA)
  {
    type: 'certification',
    institution: 'Universidad Tecnológica Nacional (UTN.FRD)',
    title: 'Diplomado en Python para IA',
    period: '2026',
    description: 'Formación en Machine Learning avanzado, Deep Learning, NLP, automatización de procesos y despliegue de modelos en producción con Flask, FastAPI y Docker.',
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Education() {
  return (
    <section id="educacion" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold text-white mb-16 text-center"
        >
          Educación y Certificaciones
        </motion.h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 md:left-2 top-1 w-8 h-8 rounded-full bg-surface border border-accent/30 flex items-center justify-center">
                  {item.type === 'education' ? (
                    <FiBookOpen className="text-accent text-sm" />
                  ) : (
                    <FiAward className="text-accent text-sm" />
                  )}
                </div>

                <span className="text-xs font-medium text-accent uppercase tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                <p className="text-sm text-neutral-500 mt-0.5">{item.institution}</p>
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>

                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
