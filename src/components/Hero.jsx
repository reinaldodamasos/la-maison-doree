export default function Hero({ onMenuClick }) {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">La Maison Dorée</h1>
        <p className="hero-subtitle">Culinária Francesa Autêntica desde 1987</p>
        <p className="hero-tagline">Uma experiência gastronômica inesquecível</p>
        <button className="btn-primary" onClick={onMenuClick}>
          Ver Cardápio
        </button>
      </div>
    </section>
  )
}
