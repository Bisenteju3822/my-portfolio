import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const contactItems = [
  { icon: Mail, label: 'Email', value: 'tejasavebisen@gmail.com', href: 'mailto:tejasavebisen@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9201729633', href: 'tel:+919201729633' },
  { icon: MapPin, label: 'Location', value: 'Bhopal, India', href: '#' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="contact" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: '#818cf8', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
            {'// contact'}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f3f4f6', marginBottom: 12, letterSpacing: '-0.02em' }}>
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: 16, marginBottom: 48, maxWidth: 500, lineHeight: 1.7 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }} className="contact-grid">
            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="glass-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: 18, borderRadius: 14,
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(99, 102, 241, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} style={{ color: '#818cf8' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{label}</div>
                    <div style={{ color: '#e5e7eb', fontSize: 14, fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}

              {/* Social links */}
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a
                  href="https://github.com/Bisenteju3822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', gap: 12,
                    padding: 18, borderRadius: 14,
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(99, 102, 241, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <GithubIcon size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>GitHub</div>
                    <div style={{ color: '#e5e7eb', fontSize: 14, fontWeight: 500 }}>Bisenteju3822</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/tejasavebisen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', gap: 12,
                    padding: 18, borderRadius: 14,
                    textDecoration: 'none', color: 'inherit',
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(99, 102, 241, 0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <LinkedinIcon size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#4b5563', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>LinkedIn</div>
                    <div style={{ color: '#e5e7eb', fontSize: 14, fontWeight: 500 }}>tejasavebisen</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.target as HTMLFormElement
                const name = (form.elements.namedItem('name') as HTMLInputElement).value
                const email = (form.elements.namedItem('email') as HTMLInputElement).value
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
                window.location.href = `mailto:tejasavebisen@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
              }}
              className="glass-card"
              style={{ borderRadius: 16, padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <input name="name" type="text" placeholder="Your Name" required className="contact-input" />
                <input name="email" type="email" placeholder="Your Email" required className="contact-input" />
              </div>
              <textarea name="message" rows={5} placeholder="Tell me about your project..." required className="contact-input" style={{ resize: 'none' }} />
              <button
                type="submit"
                className="glow-btn"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  padding: '14px 28px', borderRadius: 12, border: 'none',
                  background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
                  color: '#fff', fontWeight: 600, fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.25)',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                }}
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
