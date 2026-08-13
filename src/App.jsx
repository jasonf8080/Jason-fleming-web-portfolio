import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import CaseStudySouthSalemWinery from './pages/CaseStudySouthSalemWinery'
import CaseStudyGardensideKitchen from './pages/CaseStudyGardensideKitchen'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-secondary text-primary">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/south-salem-winery" element={<CaseStudySouthSalemWinery />} />
          <Route path="/work/gardenside-kitchen" element={<CaseStudyGardensideKitchen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
