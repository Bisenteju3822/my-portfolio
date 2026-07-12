import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    color: '#6366f1',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'C#', 'SQL'],
  },
  {
    title: 'Frontend',
    color: '#22d3ee',
    skills: ['React.js', 'Next.js', 'ReactFlow', 'Zustand', 'Redux', 'RTK Query', 'Tanstack Query', 'Tailwind CSS', 'Bootstrap', 'CSS3', 'HTML5', 'Framer Motion'],
  },
  {
    title: 'Backend',
    color: '#a78bfa',
    skills: ['Node.js', 'NestJS', 'Express.js', 'FastAPI', 'GraphQL', 'REST APIs', 'Prisma'],
  },
  {
    title: 'Databases',
    color: '#f59e0b',
    skills: ['PostgreSQL', 'pgvector', 'MongoDB', 'MySQL', 'SQLite', 'CouchDB', 'Redis'],
  },
  {
    title: 'AI / ML / Search',
    color: '#34d399',
    skills: ['OpenAI Embeddings', 'LangChain', 'LangGraph', 'RAG', 'OpenSearch', 'Vector Search', 'MCP Server', 'LLM', 'text-embedding-ada', 'text-embedding-3-large', 'Xenova Transformers'],
  },
  {
    title: 'Real-Time & Messaging',
    color: '#f43f5e',
    skills: ['WebSocket', 'Colyseus', 'Kafka', 'NATS', 'Event-Driven Architecture'],
  },
  {
    title: 'DevOps & Tools',
    color: '#38bdf8',
    skills: ['Docker', 'NGINX', 'PM2', 'Git', 'GitHub', 'GitLab', 'GitKraken', 'Azure VM', 'SSH', 'Linux'],
  },
  {
    title: 'Cloud & Deployment',
    color: '#8b5cf6',
    skills: ['Vercel', 'Render', 'Netlify', 'Railway', 'Cloudinary', 'Google Meet API'],
  },
  {
    title: 'API & Auth',
    color: '#14b8a6',
    skills: ['Postman', 'Swagger UI', 'HMAC', 'SCRAM', 'JWT', 'Figma'],
  },
  {
    title: 'Healthcare',
    color: '#ec4899',
    skills: ['FHIR', 'HL7', 'OHIF Viewer', 'DICOM', 'HAPI FHIR'],
  },
  {
    title: 'Mobile',
    color: '#818cf8',
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'CS Fundamentals',
    color: '#9ca3af',
    skills: ['DSA', 'OOP', 'System Design', 'Graph Algorithms', 'Operating Systems', 'Computer Networks', 'STL'],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" style={{ padding: '120px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: '#818cf8', fontFamily: "'JetBrains Mono', monospace", fontSize: 13, marginBottom: 8, letterSpacing: '0.05em' }}>
            {'// tech stack'}
          </p>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#f3f4f6', marginBottom: 48, letterSpacing: '-0.02em' }}>
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }} className="skills-grid">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="glass-card"
                style={{ borderRadius: 16, padding: 24 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{
                    width: 4, height: 24, borderRadius: 4,
                    background: `linear-gradient(180deg, ${cat.color}, ${cat.color}66)`,
                  }} />
                  <h3 style={{ color: '#f3f4f6', fontWeight: 600, fontSize: 15 }}>{cat.title}</h3>
                  <span style={{ fontSize: 11, color: '#4b5563', marginLeft: 'auto' }}>
                    {cat.skills.length}
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
