import AboutMePage from '@home/pages/AboutMePage'
import HomePage from '@home/pages/HomePage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </>
  )
}
