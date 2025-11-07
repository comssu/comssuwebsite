import React from 'react'
import { Link } from 'react-router-dom'
import { events } from '../../data/events'
import Footer from '../../components/Footer'
import NavBar from '../../components/Navbar'

export default function EventsList() {
  return (
    <>
      <NavBar />
      <main className='pt-20 px-10'>
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
      </main>
      <Footer />
    </>
  )
}
