import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import ClubsList from './pages/Clubs/ClubsList'

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
      <Route path="/events/:id" element={<EventDetail />} />
    </Routes>
  );
}