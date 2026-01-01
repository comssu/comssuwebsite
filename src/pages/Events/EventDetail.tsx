import React from "react";
import { useParams, Link } from "react-router-dom";
import { events } from "../../data/events";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Calendar, ArrowLeft, Star, Award, Target, BookOpen, CheckCircle, Clock as ClockIcon, Lightbulb } from "lucide-react";

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id!));

  // Function to determine if event is upcoming or past - IMPROVED DATE PARSING
  const getEventStatus = (eventDate: string) => {
    let eventDateObj;
    
    try {
      //this is to Handle date ranges like "Jan 19 – 24, 2026" or "Apr 28 – 30, 2026"
      if (eventDate.includes('–')) {
        const parts = eventDate.split('–');
        const startPart = parts[0].trim(); 
        const endPart = parts[1].trim();   
        
        // Extract year from end part
        const yearMatch = endPart.match(/(\d{4})/);
        const year = yearMatch ? yearMatch[1] : "2026";
        
        // Create full date string like "Jan 19, 2026"
        const fullDateStr = `${startPart}, ${year}`;
        eventDateObj = new Date(fullDateStr);
      } else {
        // Handle single dates like "Nov 3, 2025"
        eventDateObj = new Date(eventDate);
      }
      
      console.log('Parsed date:', eventDateObj);
      
    } catch (error) {
      console.log('Date parsing error:', error);

      return { 
        status: 'upcoming', 
        label: 'Upcoming', 
        icon: ClockIcon, 
        color: 'from-green-500 to-emerald-600', 
        textColor: 'text-green-600' 
      };
    }

    const today = new Date();
    
    today.setHours(0, 0, 0, 0);
    eventDateObj.setHours(0, 0, 0, 0);
    
    if (isNaN(eventDateObj.getTime())) {
      console.log('Invalid date detected, defaulting to upcoming');
      return { 
        status: 'upcoming', 
        label: 'Upcoming', 
        icon: ClockIcon, 
        color: 'from-green-500 to-emerald-600', 
        textColor: 'text-green-600' 
      };
    }
    
    console.log('Today:', today);
    console.log('Event date:', eventDateObj);
    console.log('Comparison:', eventDateObj > today ? 'UPCOMING' : 'PAST');
    
    if (eventDateObj > today) {
      return { 
        status: 'upcoming', 
        label: 'Upcoming', 
        icon: ClockIcon, 
        color: 'from-green-500 to-emerald-600', 
        textColor: 'text-green-600' 
      };
    } else if (eventDateObj < today) {
      return { 
        status: 'past', 
        label: 'Past', 
        icon: CheckCircle, 
        color: 'from-blue-500 to-sky-600', 
        textColor: 'text-blue-600' 
      };
    } else {
      return { 
        status: 'today', 
        label: 'Happening Today', 
        icon: Star, 
        color: 'from-amber-500 to-orange-600', 
        textColor: 'text-amber-600' 
      };
    }
  };

  const eventStatus = event ? getEventStatus(event.date) : null;
  const StatusIcon = eventStatus?.icon || ClockIcon;

  
  if (!event) {
    return (
      <div className="min-h-screen bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50 flex flex-col">
        <NavBar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-sky-400 to-blue-500 rounded-2xl blur-lg opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="w-20 h-20 bg-linear-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="text-white w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold bg-linear-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  Event Not Found
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The event you're looking for has either concluded or doesn't exist in our records.
                </p>
                <Link 
                  to="/events" 
                  className="inline-flex items-center gap-3 bg-linear-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Events
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50 flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="pt-24"> 
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-sky-400/20 via-blue-400/10 to-cyan-400/20 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

                <div className="relative h-96 overflow-hidden"> 
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${event.image || '/api/placeholder/1600/900'})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/60" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <Link 
                      to="/events" 
                      className="bg-white/90 backdrop-blur-sm text-sky-700 hover:text-sky-800 font-semibold px-4 py-2 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 hover:border-sky-200 flex items-center gap-2 group"
                    >
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300" />
                      Back to Events
                    </Link>

                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-sky-600" />
                        <span className="font-semibold text-gray-800">{event.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-2 right-6">
                    {eventStatus && (
                      <div className={`bg-linear-to-r ${eventStatus.color} text-white px-4 py-2 rounded-2xl shadow-lg border border-white/20 flex items-center gap-2`}>
                        <StatusIcon className="w-4 h-4" />
                        <span className="font-semibold">{eventStatus.label}</span>
                      </div>
                    )}
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 p-8 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-2xl">
                      {event.title}
                    </h1>
                    <p className="text-xl text-sky-100 max-w-3xl leading-relaxed drop-shadow-lg">
                      {event.summary}
                    </p>
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
                          <h2 className="text-3xl font-bold text-gray-800">Event Overview</h2>
                          <p className="text-gray-600">Complete details about this {eventStatus?.status === 'past' ? 'past' : 'upcoming'} event</p>
                        </div>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-sm mb-6 bg-white p-3 rounded-2xl border border-sky-100">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {eventStatus?.status === 'upcoming' && event.keyTakeaways && event.whatToExpect && (
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                        <div className="bg-linear-to-br from-white to-amber-50 rounded-2xl p-6 border border-amber-100 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4">Key Takeaways</h3>
                          <div className="space-y-3">
                            {event.keyTakeaways.map((takeaway, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-200/50">
                                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                <span className="text-gray-700 text-sm">{takeaway}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-sky-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                            <Target className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4">What to Expect</h3>
                          <div className="space-y-3">
                            {event.whatToExpect.map((expectation, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 bg-blue-50/50 rounded-xl border border-blue-200/50">
                                <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5 shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-gray-700 text-sm">{expectation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {eventStatus?.status === 'past' && (
                      <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-200 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle className="w-8 h-8 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-800">Event Completed</h3>
                        </div>
                        <p className="text-gray-700 text-lg">
                          This event successfully took place on {event.date}. Thank you to all participants, speakers, and organizers who made this event memorable.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default EventDetail;