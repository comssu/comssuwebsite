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
import ClubsList from './pages/Clubs/ClubsList'

// Lazy-load larger pages
const ClubDetail = lazy(() => import('./pages/Clubs/ClubDetail'))
const EventsList = lazy(() => import('./pages/Events/EventsList'))
const EventDetail = lazy(() => import('./pages/Events/EventDetail'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clubs/:clubId" element={<ClubDetail />} />
      <Route path="/clubs" element={<ClubsList />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/:eventId" element={<EventDetail />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}