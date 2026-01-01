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
    <div className="relative mb-4 lg:mb-12">
      <div className="absolute -inset-2 lg:-inset-4 bg-linear-to-r from-sky-400/10 to-blue-400/10 rounded-2xl lg:rounded-3xl blur-xl"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-sm lg:shadow-md border border-white/20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4 lg:gap-6">
            <div>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
                <span className="text-xs lg:text-sm font-semibold text-sky-600 uppercase tracking-widest">Semester {semesterNumber}</span>
              </div>
              <h2 className="text-lg lg:text-2xl font-bold text-gray-800">
                {title}
              </h2>
              <p className="text-gray-600 lg:mt-2 text-sm lg:text-lg">Academic Year 2025/2026</p>
            </div>
          </div>

        </div>
      </div>
    </div>

    {events.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
  </section>
);

export default SemesterSection;