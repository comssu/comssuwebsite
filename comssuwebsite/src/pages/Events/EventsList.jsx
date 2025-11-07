// src/pages/Events/EventsList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { events } from '../../data/events'

export default function EventsList() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <ul className="space-y-4">
        {events.map(ev => (
          <li key={ev.id} className="border p-3 rounded">
            <h3 className="font-semibold">{ev.title}</h3>
            <p className="text-sm">{ev.date} — {ev.summary}</p>
            <Link to={`/events/${ev.id}`} className="text-pink-600">View event</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
