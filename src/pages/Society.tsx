import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { members } from "../data/members";
import { Globe, Linkedin, Github } from 'lucide-react';

const Society: React.FC = () => {
  return (
    <>
      <NavBar />

      <main className="pt-28 px-6 min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Computer Science Students
        </h2>

        {members.length === 0 ? (
          <div className="flex justify-center items-center flex-col gap-3">
            <img src="/images/sad.png" className="w-20" />
            <p className="text-sm font-semibold">
              No student with full membership!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {members.map((student) => (
              <div
                key={student.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={student.image}
                    alt={`${student.firstname} ${student.lastname}`}
                    className="w-24 h-24 rounded-full object-cover border"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center">
                  {student.firstname} {student.lastname}
                </h3>

                <p className="text-sm text-gray-600 text-center mt-1">
                  {student.email}
                </p>

                <p className="text-sm text-gray-700 text-center mt-3">
                  {student.about}
                </p>

                <div className="flex justify-center gap-4 mt-4">
                  {student.website && (
                    <a
                      href={student.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition"
                      title="Website"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}

                  {student.linkedIn && (
                    <a
                      href={student.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}

                  {student.github && (
                    <a
                      href={student.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-blue-600 transition"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Society;
