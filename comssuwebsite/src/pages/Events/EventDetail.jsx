// src/pages/Events/EventDetail.jsx
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { events } from '../../data/events'

export default function EventDetail() {
  const { eventId } = useParams()
  const navigate = useNavigate()
  const event = events.find(e => e.id === eventId)

  if (!event) return <div>Event not found</div>

  return (
    <div>
      <button onClick={() => navigate('/events')} className="mb-4 underline">← Back to events</button>
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-sm text-gray-600">{event.date}</p>
      <div className="mt-4">{event.details}</div>
    </div>
  )
}
