import React from "react";
import { events } from "../../data/events";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import SemesterSection from "../../components/SemesterSection";

const EventsList: React.FC = () => {
  const firstSemester = events.filter(
    (event) => event.semester === "First Semester" );
  const secondSemester = events.filter(
    (event) => event.semester === "Second Semester" );

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="pt-20 lg:pt-24 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <SemesterSection 
              title="First Semester Events" 
              events={firstSemester} 
              semesterNumber="1"
            />
            
            <SemesterSection 
              title="Second Semester Events" 
              events={secondSemester} 
              semesterNumber="2"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};


export default EventsList;