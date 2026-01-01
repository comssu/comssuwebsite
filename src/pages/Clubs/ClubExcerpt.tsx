import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Club } from '../../utils/types';

interface Props {
  club: Club
}

const ClubExcerpt: React.FC<Props> = ({ club }) => {
    return (
        <div className={`group relative bg-white rounded-2xl lg:rounded-3xl shadow-sm transition-all duration-500 overflow-hidden border-2 border-sky-400 ring-opacity-50`}>

        <div className="relative h-48 lg:h-56 overflow-hidden">
            <img
            src={club.image}
            alt={club.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />
            
            <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
            <span className="bg-white/90 backdrop-blur-sm text-sky-700 px-2 py-1 lg:px-3 lg:py-1.5 rounded-full text-xs font-semibold shadow-lg border border-white/50">
                {club.category || "Club"}
            </span>
            </div>
        </div>

        <div className="relative p-4 lg:p-6 z-10">

            <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 lg:mb-3 line-clamp-2 transition-colors duration-300 leading-tight">
            {club.name}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed mb-2 lg:mb-4 line-clamp-2">
            {club.summary}
            </p>

            <Link
            to={`/clubs/${club.id}`}
            className="inline-flex items-center gap-2 bg-linear-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-xl transition-all duration-300 transform shadow-lg hover:shadow-xl w-full justify-center group/link text-sm lg:text-base"
            >
            View Details
            <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
            </Link>
        </div>

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-200 rounded-2xl lg:rounded-3xl transition-all duration-500 pointer-clubs-none"></div>
        </div>
    )
}

export default ClubExcerpt;