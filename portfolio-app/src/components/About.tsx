import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Cpu, Zap, Brain } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Full Stack', desc: 'React, Node.js, NestJS, Next.js', color: '#6366f1' },
  { icon: Cpu, label: 'Distributed Systems', desc: 'Kafka, Redis, WebSocket, Docker', color: '#22d3ee' },
  { icon: Zap, label: 'Real-Time', desc: 'Colyseus, 1000+ concurrent users', color: '#f59e0b' },
  { icon: Brain, label: 'AI / ML', desc: 'RAG, LLM, Embeddings, LangChain', color: '#a78bfa' },
]

const stats = [
  { value: '1.5+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '10K+', label: 'Embeddings Processed' },
  { value: '40%', label: 'Latency Reduced' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <p style={{ color: '#818cf8', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
            {'// about me'}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f3f4f6', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Engineering Systems{' '}
            <span className="gradient-text">That Scale</span>
          </h2>

          {/* Two column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, marginTop: 48 }} className="about-grid">
            {/* Left - text */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p style={{ color: '#9ca3af', fontSize: 16, lineHeight: 1.8 }}>
                  I'm a Full Stack Engineer with a deep focus on{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>distributed systems</strong>,{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>real-time multiplayer infrastructure</strong>, and{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>AI-powered search</strong>.
                  I've delivered production systems handling 1,000+ concurrent users
                  and processed 10,000+ vector embeddings for semantic retrieval.
                </p>
                <p style={{ color: '#9ca3af', fontSize: 16, lineHeight: 1.8 }}>
                  My expertise spans from building{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>FHIR-compliant healthcare platforms</strong> for
                  Neuro Foundation Hospital to architecting{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>AI pipeline builders</strong> with ReactFlow
                  and implementing{' '}
                  <strong style={{ color: '#e5e7eb', fontWeight: 500 }}>RAG-based intelligent search</strong> with LangChain and OpenAI.
                </p>
                <p style={{ color: '#9ca3af', fontSize: 16, lineHeight: 1.8 }}>
                  Passionate about high-performance engineering, event-driven design,
                  and building backend systems that are resilient, fast, and maintainable.
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 40 }} className="stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label} style={{
                    textAlign: 'center', padding: '20px 12px',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 12,
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div className="gradient-text" style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: 12, color: '#6b7280', letterSpacing: '0.02em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - highlight cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="highlight-grid">
              {highlights.map(({ icon: Icon, label, desc, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card"
                  style={{ borderRadius: 16, padding: 24, cursor: 'default' }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: `${color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 16,
                  }}>
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 style={{ color: '#f3f4f6', fontWeight: 600, fontSize: 16, marginBottom: 6 }}>{label}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1.2fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .highlight-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
