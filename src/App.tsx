import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ClubsList from './pages/Clubs/ClubsList';
import ClubDetail from './pages/Clubs/ClubDetail';
import EventsList from './pages/Events/EventsList';
import EventDetail from './pages/Events/EventDetail';
import Society from './pages/Society';
import Signin from './pages/Signin';
import Dashboard from './pages/Admin/Dashboard';
import AddMember from './pages/Admin/AddMember';
import type { Member } from './types/member';
import { members as initialMembers } from './data/members';

const App: React.FC = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clubs" element={<ClubsList />} />
      <Route path="/clubs/:clubId" element={<ClubDetail />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/society" element={<Society members={members} />} />
      <Route path="/society/signin" element={<Signin />} />
      <Route
        path="/admin/dashboard"
        element={<Dashboard members={members} setMembers={setMembers} />}
      />
      <Route
        path="/admin/add-member"
        element={<AddMember members={members} setMembers={setMembers} />}
      />
    </Routes>
  );
};

export default App;
