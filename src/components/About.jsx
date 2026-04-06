import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl font-bold text-white mb-16 text-center"
        >
          Sobre mí
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 order-2 md:order-1"
          >
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                Estudiante avanzado de Ingeniería en Sistemas (UTN.BA) y Diplomado en Python para IA (UTN.BA) especializado en AI Engineering.
              </p>

              <p>
              Actualmente me dedico a la creación de agentes inteligentes y workflows automatizados quereemplazan operaciones manuales, ahorrando tiempo y reduciendo errores en el día a día de profesionales y equipos.              </p>
              <p>
                Me apasiona hacer visible el impacto de la IA: trabajo junto a empresas y negocios
                para entender sus necesidades, diseñar soluciones adoptables y demostrar con datos
                cómo la automatización transforma su operación.
              </p>
              <p>
                La comunicación es una de mis principales fortalezas: soy extrovertido, colaborativo
                y conecto fácilmente con personas diversas — clave cuando se construyen puentes entre
                tecnología, negocio y usuarios finales.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 md:order-2 shrink-0"
          >
            <img
              src="/foto-perfil.jpg"
              alt="Santino Quiroga"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-accent/20 object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
