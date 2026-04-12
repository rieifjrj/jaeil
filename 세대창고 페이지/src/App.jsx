import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import useScrollAnimation from './hooks/useScrollAnimation'
import './styles/global.css'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
    </>
  )
}

function AppContent() {
  useScrollAnimation()
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
