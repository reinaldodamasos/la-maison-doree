import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import MenuModal from './components/MenuModal'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('entradas')

  return (
    <div className="app">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <Hero onMenuClick={() => setIsMenuOpen(true)} />
      <About />
      <MenuPreview onMenuClick={() => setIsMenuOpen(true)} />
      <Contact />
      <Footer />
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  )
}

export default App
