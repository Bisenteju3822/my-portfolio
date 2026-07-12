import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, GraduationCap } from 'lucide-react'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Fractorize Software',
    location: 'Remote',
    period: 'Sep 2025 - Present',
    current: true,
    points: [
      'Architected an AI-powered semantic product search system using OpenSearch and vector embeddings, enabling contextual retrieval beyond keyword matching',
      'Generated and indexed 10,000+ product embeddings via OpenAI models (text-embedding-ada, text-embedding-3-large), improving discovery accuracy',
      'Integrated PostgreSQL + pgvector for high-performance vector similarity queries, enabling sub-second semantic lookups at scale',
      'Designed high-throughput backend APIs in Node.js + TypeScript with Redis caching and Kafka event streaming',
      'Built RAG-based retrieval systems using LangChain for intelligent document search and Q&A',
    ],
    tech: ['Node.js', 'TypeScript', 'OpenSearch', 'pgvector', 'Redis', 'Kafka', 'OpenAI', 'LangChain', 'RAG'],
  },
  {
    role: 'Backend Developer',
    company: 'Playniya Pvt. Ltd.',
    location: 'Bhopal',
    period: 'Apr 2025 - Sep 2025',
    current: false,
    points: [
      'Built a real-time multiplayer game backend using WebSocket and Colyseus, sustaining 1,000+ concurrent players',
      'Designed a matchmaking engine with dynamic room allocation, reducing player wait times',
      'Reduced API latency by 40% with Redis caching for game state and player data',
      'Built a Kafka-based event pipeline for reliable, ordered game event processing',
      'Deployed NGINX API Gateway with JWT authentication and rate limiting',
      'Containerized all services with Docker for horizontal scalability',
    ],
    tech: ['Node.js', 'Colyseus', 'WebSocket', 'Redis', 'Kafka', 'Docker', 'NGINX', 'JWT'],
  },
  {
    role: 'MERN Stack Trainee',
    company: 'Cybrom Technology Pvt. Ltd.',
    location: 'Bhopal',
    period: 'Jun 2024 - Mar 2025',
    current: false,
    points: [
      'Built full-stack applications using React, Node.js, Express, and MongoDB with auth flows and REST APIs',
      'Developed reusable component architectures and state management patterns with Redux and Context API',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: '#818cf8', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
            {'// experience'}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f3f4f6', marginBottom: 56, letterSpacing: '-0.02em' }}>
            Where I've{' '}
            <span className="gradient-text">Worked</span>
          </h2>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  style={{ position: 'relative', paddingLeft: 52 }}
                >
                  <div className={`timeline-dot ${exp.current ? 'active' : ''}`} />

                  <div className="glass-card" style={{ borderRadius: 16, padding: 28 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                      <div>
                        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f3f4f6', marginBottom: 6 }}>{exp.role}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#9ca3af', fontSize: 14 }}>
                          <Building2 size={14} style={{ color: '#6b7280' }} />
                          <span>{exp.company}</span>
                          <span style={{ color: '#374151' }}>|</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6b7280', fontSize: 13 }}>
                          <Calendar size={13} />
                          <span>{exp.period}</span>
                        </div>
                        {exp.current && (
                          <span style={{
                            padding: '3px 10px', fontSize: 11, borderRadius: 20,
                            background: 'rgba(52, 211, 153, 0.1)',
                            color: '#34d399',
                            border: '1px solid rgba(52, 211, 153, 0.2)',
                            fontWeight: 600,
                          }}>
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Points */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                      {exp.points.map((point, j) => (
                        <li key={j} style={{ display: 'flex', gap: 12, fontSize: 14, color: '#9ca3af', lineHeight: 1.6 }}>
                          <span style={{ color: '#6366f1', marginTop: 2, flexShrink: 0, fontSize: 10 }}>&#9656;</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {exp.tech.map((t) => (
                        <span key={t} style={{
                          padding: '4px 12px', fontSize: 11, borderRadius: 6,
                          background: 'rgba(99, 102, 241, 0.08)',
                          color: '#a5b4fc',
                          border: '1px solid rgba(99, 102, 241, 0.15)',
                          fontWeight: 500,
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            style={{ marginTop: 64 }}
          >
            <div className="edu-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <GraduationCap size={22} style={{ color: '#818cf8' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#f3f4f6' }}>B.Tech - Computer Science Engineering</h3>
                  <p style={{ fontSize: 14, color: '#9ca3af' }}>Oriental College of Technology, Bhopal | 2024 | 79%</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Data Structures & Algorithms', 'OOP', 'System Design', 'Graph Algorithms', 'Operating Systems', 'Computer Networks'].map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
