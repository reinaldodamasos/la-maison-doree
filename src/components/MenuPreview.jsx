export default function MenuPreview({ onMenuClick }) {
  const featured = [
    { name: 'Foie Gras Terrine', price: '€28', desc: 'Com figos caramelizados e brioche torrado' },
    { name: 'Bouillabaisse', price: '€38', desc: 'Ensopado de frutos do mar provençal' },
    { name: 'Canard Confit', price: '€34', desc: 'Pato confitado com purê de batata' },
    { name: 'Crème Brûlée', price: '€14', desc: 'Creme de baunilha com crosta de caramelo' },
  ]

  return (
    <section className="menu-preview">
      <div className="container">
        <h2 className="section-title">Destaques do Cardápio</h2>
        <div className="featured-grid">
          {featured.map((item, i) => (
            <div key={i} className="featured-card">
              <div className="featured-info">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
              <span className="featured-price">{item.price}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary" onClick={onMenuClick} style={{ marginTop: '2rem' }}>
          Ver Cardápio Completo
        </button>
      </div>
    </section>
  )
}
