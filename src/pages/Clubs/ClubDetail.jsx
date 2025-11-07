import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { clubs } from '../../data/clubs'

export default function ClubDetail() {
  const { clubId } = useParams()
  const navigate = useNavigate()
  const club = clubs.find(c => c.id === clubId)

  if (!club) {
    return (
      <div>
        <h2>Club not found</h2>
        <button onClick={() => navigate('/clubs')} className="mt-2 underline">Back to clubs</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="mb-4 underline">← Back</button>
      <h1 className="text-3xl font-bold">{club.name}</h1>
      <p className="mt-2">{club.description}</p>

      {/* If the club has sub-pages (members, gallery), add links here */}
      {/* <Link to="members">Members</Link> */}
    </div>
  )
}
