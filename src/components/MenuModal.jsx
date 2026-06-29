import { useEffect } from 'react'

const menuData = {
  entradas: [
    { name: 'Foie Gras Terrine', price: 28, desc: 'Com figos caramelizados e brioche torrado', popular: true },
    { name: 'Soupe à l\'Oignon', price: 16, desc: 'Sopa de cebola gratinada com gruyère' },
    { name: 'Escargots de Bourgogne', price: 22, desc: 'Lesma com manteiga de alho e ervas', popular: true },
    { name: 'Tartare de Saumon', price: 19, desc: 'Tartare de salmão com abacate e gergelim' },
    { name: 'Salade Niçoise', price: 17, desc: 'Salada com atum, ovos, azeitonas e anchovas' },
    { name: 'Bruschetta Trio', price: 15, desc: 'Três mini bruschettas: tomate, cogumelo e presunto' },
  ],
  principais: [
    { name: 'Bouillabaisse', price: 38, desc: 'Ensopado de frutos do mar provençal', popular: true },
    { name: 'Canard Confit', price: 34, desc: 'Pato confitado com purê de batata', popular: true },
    { name: 'Filet de Boeuf', price: 42, desc: 'Filé mignon com molho de vinho tinto e legumes', popular: true },
    { name: 'Sole Meunière', price: 36, desc: 'Linguado em manteiga com limão e salsa' },
    { name: 'Coq au Vin', price: 32, desc: 'Galinha cozida em vinho tinto com cogumelos' },
    { name: 'Risotto aux Cèpes', price: 29, desc: 'Risoto de cogumelos porcini com parmesão' },
    { name: 'Agneau Rôti', price: 40, desc: 'Cordeiro assado com ervas de Provence' },
  ],
  sobremesas: [
    { name: 'Crème Brûlée', price: 14, desc: 'Creme de baunilha com crosta de caramelo', popular: true },
    { name: 'Tarte Tatin', price: 13, desc: 'Torta invertida de maçã com caramelo' },
    { name: 'Mousse au Chocolat', price: 12, desc: 'Mousse de chocolate belga intenso', popular: true },
    { name: 'Profiteroles', price: 15, desc: 'Bolinhos recheados com sorvete e chocolate quente' },
    { name: 'Tarte au Citron', price: 13, desc: 'Torta de limão com merengue torrado' },
  ],
  bebidas: [
    { name: 'Château Margaux 2015', price: 180, desc: 'Vinho tinto Bordeaux premiado' },
    { name: 'Domaine de la Romanée 2018', price: 95, desc: 'Vinho tinto Borgonha elegante' },
    { name: 'Chablis Premier Cru', price: 48, desc: 'Vinho branco mineral e refrescante', popular: true },
    { name: 'Champagne Veuve Clicquot', price: 65, desc: 'Champagne brut clássico' },
    { name: 'Kir Royale', price: 18, desc: 'Champagne com licor de cassis' },
    { name: 'Espresso', price: 4, desc: 'Café expresso italiano' },
    { name: 'Eau Minérale', price: 5, desc: 'Água mineral com ou sem gás' },
  ],
}

const categories = [
  { key: 'entradas', label: 'Entradas', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 12c0 2 .5 4 1.5 5.5"/><path d="M20 12c0-6-4-10-8-10"/><path d="M12 17c0 2.5-2 4-4 5"/><path d="M13 17c0 2.5 2 4 4 5"/><path d="M17 8c.7-1 1-2.2 1-3.5C18 2.5 16.5 1 14.5 1c-1.4 0-2.5.8-3 2-.5-1.2-1.6-2-3-2C6.5 1 5 2.5 5 4.5c0 1.3.3 2.5 1 3.5"/></svg> },
  { key: 'principais', label: 'Principais', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2c-2.2 0-5 1.8-5 4v5c0 1.1.9 2 2 2h3Zm0 0v7"/></svg> },
  { key: 'sobremesas', label: 'Sobremesas', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 4 6 4 12c0 2 .5 4 1.5 5.5"/><path d="M20 12c0-6-4-10-8-10"/><path d="M12 17c0 2.5-2 4-4 5"/><path d="M13 17c0 2.5 2 4 4 5"/><circle cx="12" cy="12" r="3"/></svg> },
  { key: 'bebidas', label: 'Bebidas', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22V18c0-1.5-1.5-3-3-3H4c-1.5 0-3 1.5-3 3v4"/><path d="M16 22V18c0-1.5 1.5-3 3-3h1c1.5 0 3 1.5 3 3v4"/><path d="M12 7V2"/><path d="M7 11c0-3 2-7 5-7s5 4 5 7"/><path d="M4 11h16"/></svg> },
]

export default function MenuModal({ isOpen, onClose, selectedCategory, setSelectedCategory }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <h2>Cardápio</h2>
          <p>Pratos preparados com amor e tradição</p>
        </div>

        <div className="modal-categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`category-btn ${selectedCategory === cat.key ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="modal-items">
          {menuData[selectedCategory].map((item, i) => (
            <div key={i} className="menu-item">
              <div className="menu-item-info">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  {item.popular && <span className="popular-badge">Popular</span>}
                </div>
                <p>{item.desc}</p>
              </div>
              <span className="menu-item-price">&euro;{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
