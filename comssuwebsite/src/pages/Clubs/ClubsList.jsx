// src/pages/Clubs/ClubsList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { clubs } from '../../data/clubs'

export default function ClubsList() {
  return (
    <div>
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
    </div>
  )
}
