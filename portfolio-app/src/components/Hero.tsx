import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Mail, ArrowDown, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

export default function Hero() {
  return (
    <section className="grid-bg" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div className="animate-float" style={{
        position: 'absolute', top: 40, left: '5%',
        width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)',
      }} />
      <div className="animate-float" style={{
        position: 'absolute', bottom: 60, right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(80px)',
        animationDelay: '3s',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {/* Status */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '8px 20px', borderRadius: 50,
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.15)',
            marginBottom: 40,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#34d399',
              boxShadow: '0 0 8px rgba(52, 211, 153, 0.5)',
              animation: 'pulse-glow 2s infinite',
            }} />
            <span style={{ fontSize: 13, color: '#9ca3af', letterSpacing: '0.02em' }}>Available for opportunities</span>
          </div>

          {/* Name */}
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 86px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.03em' }}>
            <span style={{ color: '#f3f4f6' }}>Hi, I'm </span>
            <span className="gradient-text">Tejasave</span>
          </h1>

          {/* Typing */}
          <div style={{ height: 44, marginBottom: 24, fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 300 }}>
            <TypeAnimation
              sequence={[
                'Full Stack Engineer', 2000,
                'Distributed Systems Builder', 2000,
                'AI Pipeline Architect', 2000,
                'Real-Time Systems Developer', 2000,
                'Healthcare Tech Engineer', 2000,
              ]}
              repeat={Infinity}
              speed={40}
              style={{ color: '#818cf8' }}
            />
          </div>

          {/* Bio */}
          <p style={{
            color: '#6b7280', maxWidth: 620, margin: '0 auto 28px',
            fontSize: 17, lineHeight: 1.7, fontWeight: 400,
          }}>
            Building high-performance distributed systems, real-time multiplayer
            infrastructure, and AI-powered search engines. Passionate about systems that scale.
          </p>

          {/* Location */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 6, color: '#6b7280', marginBottom: 36,
          }}>
            <MapPin size={15} />
            <span style={{ fontSize: 13, letterSpacing: '0.02em' }}>Bhopal, India</span>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
            <a href="#projects" className="glow-btn" style={{
              padding: '14px 36px', borderRadius: 12,
              background: 'linear-gradient(135deg, #6366f1, #4f46e5)',
              color: '#fff', fontWeight: 600, fontSize: 15,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
              transition: 'all 0.3s ease',
            }}>
              View Projects
            </a>
            <a href="#contact" style={{
              padding: '14px 36px', borderRadius: 12,
              background: 'transparent',
              color: '#d1d5db', fontWeight: 500, fontSize: 15,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'all 0.3s ease',
            }}>
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            {[
              { icon: <GithubIcon size={20} />, href: 'https://github.com/Bisenteju3822' },
              { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/tejasavebisen' },
              { icon: <Mail size={20} />, href: 'mailto:tejasavebisen@gmail.com' },
            ].map(({ icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 44, height: 44, borderRadius: 12,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: '#9ca3af', textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}>
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll down */}
        <motion.div
          style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown style={{ color: 'rgba(99, 102, 241, 0.4)' }} size={22} />
        </motion.div>
      </div>
    </section>
  )
}
