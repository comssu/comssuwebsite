// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import About from './pages/About'
import Staff from './pages/Staff'
import Contact from './pages/Contact'

// Lazy-load larger pages
const ClubDetail = lazy(() => import('./pages/Clubs/ClubDetail'))
const EventsList = lazy(() => import('./pages/Events/EventsList'))
const EventDetail = lazy(() => import('./pages/Events/EventDetail'))

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-100 flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center h-64">
            <div className="text-white text-xl">Loading...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clubs/:clubId" element={<ClubDetail />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />  
    </div>
  )
}