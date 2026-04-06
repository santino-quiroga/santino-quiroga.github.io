import { FiGithub, FiLinkedin } from 'react-icons/fi'

/* PLACEHOLDER: Reemplazar con tus URLs reales */
const GITHUB_URL = 'https://github.com/santino-quiroga'
const LINKEDIN_URL = 'https://linkedin.com/in/santino-quiroga'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          © 2026 Santino Quiroga
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
