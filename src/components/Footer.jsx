export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <svg className="logo-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2c-2.2 0-5 1.8-5 4v5c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
            <span className="logo-text">La Maison Dorée</span>
            <p>Culinária Francesa Autêntica</p>
          </div>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://tripadvisor.com" target="_blank" rel="noreferrer">TripAdvisor</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 La Maison Dorée. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
