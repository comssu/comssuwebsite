import { Calendar } from "lucide-react";
import EventCard from "./EventCard";
import type { Event } from "../utils/types";

interface Props {
  title: string;
  events: Event[],
  semesterNumber: string;
}

const SemesterSection: React.FC<Props> = ({ title, events, semesterNumber }) => (
  <section className="mb-6 lg:mb-24">
    <div className="p-3 bg-white mb-2 shadow-sm rounded-2xl lg:rounded-3xl">
      <div className="flex items-center gap-2 lg:gap-3">
        <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
        <span className="text-xs lg:text-sm font-semibold text-sky-600 uppercase tracking-widest">Semester {semesterNumber}</span>
      </div>
      <h2 className="text-lg lg:text-2xl font-bold text-gray-800">
        {title}
      </h2>
      <p className="text-gray-600 text-sm lg:text-md -mt-0.5 mb-2">Academic Year 2025/2026</p>
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {events.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 lg:py-20 bg-linear-to-br from-gray-50 to-white rounded-2xl lg:rounded-3xl border-2 border-dashed border-gray-200 shadow-lg">
          <div className="w-16 h-16 lg:w-24 lg:h-24 bg-linear-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg">
            <Calendar className="w-8 h-8 lg:w-12 lg:h-12 text-gray-400" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-600 mb-2 lg:mb-3">Coming Soon</h3>
          <p className="text-gray-500 max-w-md mx-auto text-sm lg:text-base px-4">
            Exciting events are being planned for this semester. Stay tuned for announcements!
          </p>
        </div>
      )}
    </div>


  </section>
);

export default SemesterSection;