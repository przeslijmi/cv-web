import ContactPage from '@contact/pages/ContactPage'
import AboutMePage from '@home/pages/AboutMePage'
import HomePage from '@home/pages/HomePage'
import OutcomePage from '@outcome/pages/OutcomePage'
import TechStackPage from '@outcome/pages/TechStackPage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/outcome" element={<OutcomePage />} />
        <Route path="/tech-stack" element={<TechStackPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}
