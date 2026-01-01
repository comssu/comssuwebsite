import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import clubs from '../../data/clubs';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ArrowLeft, BookOpen } from 'lucide-react';

const ClubDetail: React.FC = () => {
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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="pt-20"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-sky-50 backdrop-blur-sm rounded-3xl shadow-sm border border-white/20 overflow-hidden">

                <div className="relative h-96 overflow-hidden"> 
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${club.image || '/api/placeholder/1600/900'})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/60" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Link 
                      to="/clubs" 
                      className="bg-white backdrop-blur-sm text-sky-700 hover:text-sky-800 font-semibold px-3 py-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-sky-200 flex items-center gap-1 group"
                    >
                      <ArrowLeft className="w-4 h-4 text-sm transform group-hover:-translate-x-1 transition-transform duration-300" />
                      Back to Clubs
                    </Link>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 p-8 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                      {club.title}
                    </h1>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 p-6">
                  <div className="xl:col-span-3">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-linear-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-lg font-bold text-gray-800">{club.name}</h2>
                          <p className="text-gray-600 text-sm -mt-1">Club Overview</p>
                        </div>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-md mb-6 bg-white p-3 rounded-2xl border border-sky-100">
                          {club.description}
                        </p>
                      </div>
                    </div>
                    {<div>
                        <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm transition-all duration-300"> 
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {club.staff.map((staff, index) => (
                              <div key={index} className="flex flex-col items-center justify-center aspect-square p-3 bg-sky-50/50 rounded-xl border border-sky-200/50">
                                <img src={staff.image} className='rounded-xl mb-1 w-50 aspect-square object-cover object-top' />
                                <h3 className='font-bold'>{staff.name}</h3>
                                <span className="text-gray-700 text-sm">{staff.position}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default ClubDetail;