import React from 'react'
import { Link } from 'react-router-dom'
import { clubs } from '../../data/clubs';
import Footer from '../../components/Footer'
import NavBar from '../../components/Navbar';

export default function ClubsList() {
  return (
    <>
      <NavBar />
      <main className='pt-20 px-10'>
        <h1 className="text-2xl font-bold mb-4">Clubs</h1>
        <div className="space-y-3">
          {clubs.map((club) => (
            <div key={club.id} className="border p-4 rounded">
              <h2 className="text-xl font-semibold">{club.name}</h2>
              <p className="text-sm">{club.short}</p>
              <Link to={`/clubs/${club.id}`} className="text-pink-600 mt-2 inline-block">Read more →</Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
