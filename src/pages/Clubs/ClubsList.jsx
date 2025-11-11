import React from 'react'
import { Link } from 'react-router-dom'
import { clubs } from '../../data/clubs';
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar';
import ClubExcerpt from './ClubExcerpt';

export default function ClubsList() {
  return (
    <>
      <NavBar />
      <main className='pt-20 pb-20 px-5 max-w-7xl mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clubs.map((club) => (
            <ClubExcerpt club={club} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
