import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.04)',
      padding: '32px 24px',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#6b7280' }}>
          <span>Built with</span>
          <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} />
          <span>by</span>
          <span style={{ color: '#e5e7eb', fontWeight: 600 }}>Tejasave Bisen</span>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 11, color: '#374151',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          <span>React</span>
          <span style={{ color: '#4b5563' }}>+</span>
          <span>TypeScript</span>
          <span style={{ color: '#4b5563' }}>+</span>
          <span>Tailwind</span>
          <span style={{ color: '#4b5563' }}>+</span>
          <span>Framer Motion</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {[
            { icon: <GithubIcon size={16} />, href: 'https://github.com/Bisenteju3822' },
            { icon: <LinkedinIcon size={16} />, href: 'https://linkedin.com/in/tejasavebisen' },
            { icon: <Mail size={16} />, href: 'mailto:tejasavebisen@gmail.com' },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
              color: '#4b5563', transition: 'color 0.2s', display: 'flex',
            }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
