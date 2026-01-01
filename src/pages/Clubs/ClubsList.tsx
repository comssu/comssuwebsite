import React from 'react';
import clubs from '../../data/clubs';
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar';
import ClubExcerpt from './ClubExcerpt';

const ClubsList: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className='pt-20 pb-20 md:pb-4 px-5 max-w-7xl mx-auto'>
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


export default ClubsList;