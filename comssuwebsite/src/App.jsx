// src/App.jsx
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
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
    <div className="min-h-screen">
      <NavBar />
      <main className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />


            <Route path="/events" element={<EventsList />} />
            <Route path="/events/:eventId" element={<EventDetail />} />

            <Route path="/staff" element={<Staff />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
