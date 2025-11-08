import React from "react";
import { Link } from "react-router-dom";
import { events } from "../../data/events";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Calendar, ArrowRight, Clock, MapPin, Users, Star, BookOpen, Trophy, TrendingUp, Zap } from "lucide-react";

export default function EventList() {
  const firstSemester = events.filter(
    (event) => event.semester === "First Semester"
  );
  const secondSemester = events.filter(
    (event) => event.semester === "Second Semester"
  );

  const featuredEvents = [...firstSemester.slice(0, 2), ...secondSemester.slice(0, 2)];

  const EventCard = ({ event, featured = false }) => (
    <div className={`group relative bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl hover:shadow-xl lg:hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 ${
      featured ? 'ring-2 ring-amber-400 ring-opacity-50' : ''
    }`}>

      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
      
      {featured && (
        <div className="absolute top-3 left-3 lg:top-4 lg:left-4 z-10">
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 lg:px-3 lg:py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
            <Star className="w-3 h-3" />
            Featured
          </div>
        </div>
      )}

      <div className="relative h-48 lg:h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        
        <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
          <span className="bg-white/90 backdrop-blur-sm text-sky-700 px-2 py-1 lg:px-3 lg:py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/50">
            {event.category || "Event"}
          </span>
        </div>
      </div>

      <div className="relative p-4 lg:p-6 z-10">
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <div className="flex items-center gap-2 text-sky-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">{event.date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            {event.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
              </div>
            )}
            {event.speakers && event.speakers.length > 0 && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{event.speakers.length}</span>
              </div>
            )}
          </div>
        </div>

        <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 line-clamp-2 group-hover:text-sky-700 transition-colors duration-300 leading-tight">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 lg:mb-5 line-clamp-2">
          {event.summary}
        </p>

        <Link
          to={`/events/${event.id}`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl w-full justify-center group/link text-sm lg:text-base"
        >
          View Details
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-200 rounded-2xl lg:rounded-3xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );

  const SemesterSection = ({ title, events, semesterNumber, gradient }) => (
    <section className="mb-16 lg:mb-24">
      <div className="relative mb-8 lg:mb-12">
        <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-r from-sky-400/10 to-blue-400/10 rounded-2xl lg:rounded-3xl blur-xl"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl lg:shadow-2xl border border-white/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4 lg:gap-6">
              <div className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl lg:shadow-2xl`}>
                <div className="text-white font-bold text-xl lg:text-2xl">{semesterNumber}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 lg:gap-3 mb-2">
                  <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                  <span className="text-xs lg:text-sm font-semibold text-sky-600 uppercase tracking-widest">Semester {semesterNumber}</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
                  {title}
                </h2>
                <p className="text-gray-600 mt-1 lg:mt-2 text-base lg:text-lg">Academic Year 2025/2026</p>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="text-3xl lg:text-4xl font-bold text-sky-600">{events.length}</div>
              <div className="text-xs lg:text-sm text-gray-500 font-semibold">EVENTS</div>
            </div>
          </div>
        </div>
      </div>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white rounded-2xl lg:rounded-3xl border-2 border-dashed border-gray-200 shadow-lg">
          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
            <Calendar className="w-8 h-8 lg:w-12 lg:h-12 text-gray-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-600 mb-2 lg:mb-3">Coming Soon</h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm lg:text-base px-4">
            Exciting events are being planned for this semester. Stay tuned for announcements!
          </p>
        </div>
      )}
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 lg:mb-24">
              <h1 className="text-4xl lg:text-7xl font-black text-gray-900 mb-6 lg:mb-8 leading-tight">
                Department
                <span className="block bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent text-5xl lg:text-7xl">
                  Events
                </span>
              </h1>
              
              <p className="text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Discover cutting-edge workshops, inspiring seminars, and transformative networking events 
                designed to elevate your academic journey.
              </p>
            </div>

            {/* Stats Grid - Mobile responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-20">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-2xl border border-white/20 text-center transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4 shadow-lg">
                  <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-sky-600 mb-1 lg:mb-2">{events.length}</div>
                <div className="text-xs lg:text-base text-gray-600 font-semibold">Total Events</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-2xl border border-white/20 text-center transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4 shadow-lg">
                  <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-blue-600 mb-1 lg:mb-2">{firstSemester.length}</div>
                <div className="text-xs lg:text-base text-gray-600 font-semibold">First Semester</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-2xl border border-white/20 text-center transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4 shadow-lg">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-green-600 mb-1 lg:mb-2">{secondSemester.length}</div>
                <div className="text-xs lg:text-base text-gray-600 font-semibold">Second Semester</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-lg lg:shadow-2xl border border-white/20 text-center transform hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-500">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto mb-2 lg:mb-4 shadow-lg">
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-amber-600 mb-1 lg:mb-2">{featuredEvents.length}</div>
                <div className="text-xs lg:text-base text-gray-600 font-semibold">Featured</div>
              </div>
            </div>

            {featuredEvents.length > 0 && (
              <section className="mb-16 lg:mb-24">
                <div className="flex items-center gap-3 lg:gap-4 mb-8 lg:mb-12">
                  <div className="w-2 h-8 lg:w-3 lg:h-12 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
                  <div>
                    <h2 className="text-2xl lg:text-4xl font-black text-gray-800">Featured Events</h2>
                    <p className="text-gray-600 text-base lg:text-lg">Don't miss these highlighted events</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {featuredEvents.map((event) => (
                    <EventCard key={event.id} event={event} featured={true} />
                  ))}
                </div>
              </section>
            )}

            <SemesterSection 
              title="First Semester Events" 
              events={firstSemester} 
              semesterNumber="I"
              gradient="from-blue-500 to-sky-600"
            />
            
            <SemesterSection 
              title="Second Semester Events" 
              events={secondSemester} 
              semesterNumber="II"
              gradient="from-green-500 to-emerald-600"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};