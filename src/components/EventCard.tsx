import { ArrowRight, Calendar, MapPin, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import type { Event } from "../utils/types";

interface Props {
  event: Event;
  featured?: boolean;
}

const EventCard: React.FC<Props> = ({ event, featured = false }) => (
  <div className={`group relative bg-white rounded-xl lg:rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-gray-200 hover:border-0 overflow-hidden ${
    featured ? 'ring-2 ring-amber-400 ring-opacity-50' : ''
  }`}>
    
    {featured && (
      <div className="absolute top-3 left-3 lg:top-4 lg:left-4 z-10">
        <div className="bg-linear-to-r from-amber-400 to-orange-500 text-white px-2 py-1 lg:px-3 lg:py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
          <Star className="w-3 h-3" />
          Featured
        </div>
      </div>
    )}

    <div className="relative h-48 lg:h-56 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
      
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
        className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-md w-full justify-center group/link text-sm lg:text-base"
      >
        View Details
        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </div>
);


export default EventCard;