import React, { useEffect } from 'react';
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
import ProtectedRoutes from './components/ProtectedRoutes';
import { fetchBaseQuery, type BaseQueryApi } from '@reduxjs/toolkit/query';
import { clearCredentials, setCredentials } from './app/authSlice';
import { useAppDispatch } from './app/hooks';
import StudentProfile from './pages/StudentProfile';

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const baseQuery = fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      credentials: "include",
    });
    const refreshApp = async() => {
      const refreshResult = await baseQuery("/auth/refresh", {} as BaseQueryApi, {});
      if(refreshResult.data) {
        dispatch(setCredentials(refreshResult.data));
      }else {
        await baseQuery("/auth/signout", {} as BaseQueryApi, {});
        dispatch(clearCredentials());
      }
    }
    refreshApp();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/clubs" element={<ClubsList />} />
      <Route path="/clubs/:clubId" element={<ClubDetail />} />
      <Route path="/events" element={<EventsList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/student/:id" element={<StudentProfile />} />
      <Route path="/society" element={<Society />} />
      <Route path="/signin" element={<Signin />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/admin"
          element={<Dashboard />}
        />
        <Route
          path="/admin/add-member"
          element={<AddMember />}
        />
        <Route
          path="/admin/edit-member/:id"
          element={<AddMember />}
        />
      </Route>

    </Routes>

  );
};

export default App;
