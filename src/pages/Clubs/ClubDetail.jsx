import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { clubs } from '../../data/clubs';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { ArrowLeft, BookOpen, Lightbulb, Target } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="pt-20"> 
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
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

                    {/* <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-sky-600" />
                        <span className="font-semibold text-gray-800">{club.date}</span>
                      </div>
                    </div> */}
                  </div>

                  {/* <div className="absolute bottom-2 right-6">
                    {clubStatus && (
                      <div className={`bg-linear-to-r ${clubStatus.color} text-white px-4 py-2 rounded-2xl shadow-lg border border-white/20 flex items-center gap-2`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="font-semibold">{clubStatus.label}</span>
                      </div>
                    )}
                  </div> */}

                  <div className="absolute bottom-6 left-0 right-0 p-8 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                      {club.title}
                    </h1>
                    {/* <p className="text-xl font-bold text-sky-100 max-w-3xl leading-relaxed drop-shadow-lg">
                      {club.summary}
                    </p> */}
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
                          {/* <div className="w-12 h-12 bg-linear-to-br from-sky-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Staff</h3> */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {club.staff.map((staff, index) => (
                              <div key={index} className="flex flex-col items-center justify-center aspect-square p-3 bg-sky-50/50 rounded-xl border border-sky-200/50">
                                {/* <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" /> */}
                                <img src={staff.image} className='rounded-xl mb-1 w-50 aspect-square object-cover object-top' />
                                <h3 className='font-bold'>{staff.name}</h3>
                                <span className="text-gray-700 text-sm">{staff.position}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4">What to Expect</h3>
                          <div className="space-y-3">
                            {club.whatToExpect.map((expectation, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-200/50">
                                <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-gray-700 text-sm">{expectation}</span>
                              </div>
                            ))}
                          </div>
                        </div> */}
                      </div>
                    }

                    {/* {clubStatus?.status === 'past' && (
                      <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle className="w-8 h-8 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-800">Club Completed</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                          This club successfully took place on {club.date}. Thank you to all participants, speakers, and organizers who made this club memorable.
                        </p>
                      </div>
                    )} */}

                    {/* <div className="bg-linear-to-r from-sky-500/5 to-blue-500/5 rounded-2xl p-8 border border-sky-200/50">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        {clubStatus?.status === 'past' ? 'Club Gallery' : 'Club Highlights'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {clubHighlights.map((imageSrc, index) => (
                          <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                            <img
                              src={imageSrc}
                              alt={`Club highlight ${index + 1}`}
                              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                e.target.src = `https://picsum.photos/400/300?random=${index + 1}`;
                              }}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                              <p className="text-white font-semibold text-lg">
                                {clubStatus?.status === 'past' ? 'Photo' : 'Preview'} {index + 1}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div> */}
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
