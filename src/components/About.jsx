export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Nós</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z"/></svg>
            </div>
            <h3>Paixão pela Cozinha</h3>
            <p>Cada prato é preparado com amor e dedicação, usando técnicas tradicionais francesas.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8c.7-1 1-2.2 1-3.5C18 2.5 16.5 1 14.5 1c-1.4 0-2.5.8-3 2-.5-1.2-1.6-2-3-2C6.5 1 5 2.5 5 4.5c0 1.3.3 2.5 1 3.5"/><path d="M11 17c0 2.5-2 4-4 5"/><path d="M13 17c0 2.5 2 4 4 5"/><path d="M12 2C8 2 4 6 4 12c0 2 .5 4 1.5 5.5"/><path d="M20 12c0-6-4-10-8-10"/></svg>
            </div>
            <h3>Ingredientes Frescos</h3>
            <p>Selecionamos os melhores ingredientes orgânicos de produtores locais.</p>
          </div>
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22V18c0-1.5-1.5-3-3-3H4c-1.5 0-3 1.5-3 3v4"/><path d="M16 22V18c0-1.5 1.5-3 3-3h1c1.5 0 3 1.5 3 3v4"/><path d="M12 7V2"/><path d="M7 11c0-3 2-7 5-7s5 4 5 7"/><path d="M4 11h16"/></svg>
            </div>
            <h3>Vinhos Exclusivos</h3>
            <p>Nossa carta de vinhos oferece rótulos selecionados das melhores regiões.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
