import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import To from './pages/To'
import From from './pages/From'
import FromTo from './pages/FromTo'
import Set from './pages/Set'
import Timeline from './pages/Timeline'
import Stagger from './pages/Stagger'
import ScrollTrigger from './pages/ScrollTrigger'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/to" element={<To />} />
      <Route path="/from" element={<From />} />
      <Route path="/from-to" element={<FromTo />} />
      <Route path="/set" element={<Set />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/stagger" element={<Stagger />} />
      <Route path="/scroll-trigger" element={<ScrollTrigger />} />
    </Routes>
  )
}
