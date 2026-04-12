import Hero from '../components/Hero'
import Features from '../components/Features'
import Gallery from '../components/Gallery'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Gallery />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <Faq />
      <Contact />
    </>
  )
}
