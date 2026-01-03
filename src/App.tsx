import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClubsList from './pages/Clubs/ClubsList';
import ClubDetail from './pages/Clubs/ClubDetail';
import EventsList from './pages/Events/EventsList';
import EventDetail from './pages/Events/EventDetail';
import Society from './pages/Society';
import Signin from './pages/Signin';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clubs/:clubId" element={<ClubDetail />} />
      <Route path="/clubs" element={<ClubsList />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path='/society'>
        <Route index element={<Society />} />
        <Route path='/society/signin' element={<Signin />} />
      </Route>
    </Routes>
  );
}

export default App;