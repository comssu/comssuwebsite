import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClubsList from './pages/Clubs/ClubsList';
import ClubDetail from './pages/Clubs/ClubDetail';
import EventsList from './pages/Events/EventsList';
import EventDetail from './pages/Events/EventDetail';
// const EventsList = lazy(() => import('./pages/Events/EventsList'))
// const EventDetail = lazy(() => import('./pages/Events/EventDetail'))

const App: React.FC = () => {
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

export default App;