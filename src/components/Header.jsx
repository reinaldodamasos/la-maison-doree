import { useState, useEffect } from 'react'

export default function Header({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <svg className="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2c-2.2 0-5 1.8-5 4v5c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
          <span className="logo-text">La Maison Dorée</span>
        </div>
        <nav className="nav">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <button className="nav-menu-btn" onClick={onMenuClick}>Cardápio</button>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}
