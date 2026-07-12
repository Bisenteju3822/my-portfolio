import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99, 102, 241, 0.08)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a
          href="#"
          style={{
            fontSize: 24,
            fontWeight: 700,
            fontFamily: "'JetBrains Mono', monospace",
            textDecoration: 'none',
          }}
          className="gradient-text"
        >
          {'<TB />'}
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link" style={{ textDecoration: 'none' }}>
              {link.name}
            </a>
          ))}
          <a
            href="/Tejasave_Bisen_Resume.html"
            target="_blank"
            download="Tejasave_Bisen_Resume.html"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 20px',
              fontSize: 13,
              borderRadius: 10,
              background: 'rgba(99, 102, 241, 0.12)',
              color: '#818cf8',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              fontWeight: 500,
            }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer',
            padding: 4,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(10, 10, 15, 0.98)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(99, 102, 241, 0.08)',
          padding: '24px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20,
        }} className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: 16,
                transition: 'color 0.2s',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
