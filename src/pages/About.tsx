import React, { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import staff from '../data/staff'
import type { Staff } from '../utils/types';


const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <NavBar />
      <main className="max-w-6xl mx-auto py-20 px-5">
        <div className='flex w-full justify-center gap-3 mb-3 text-sm flex-wrap font-semibold'>
          <button onClick={() => setActiveTab("about")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer transition-all ${activeTab === "about" && "bg-sky-600 text-white"}`}>About</button>
          <button onClick={() => setActiveTab("staff")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer transition-all ${activeTab === "staff" && "bg-sky-600 text-white"}`}>Staff</button>
          <button onClick={() => setActiveTab("contact")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer transition-all ${activeTab === "contact" && "bg-sky-600 text-white"}`}>Contact</button>
        </div>

        {activeTab === "about" && (
          <div className="p-4 sm:p-6 lg:p-8 bg-linear-to-br from-slate-50 to-blue-50/30 border border-slate-200 rounded-3xl shadow-sm max-w-7xl mx-auto">
            <section className="mb-6 lg:mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-center">

                <div className="space-y-2">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    EST. 2010
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 leading-tight">
                    Shaping the Future of <span className="text-blue-600">Technology</span> in Sierra Leone
                  </h2>

                  <div className="space-y-3 text-slate-600 leading-relaxed">
                    <p className="text-sm md:text-md">
                      The <span className="font-semibold text-slate-800">Computer Science Department</span> at the University of Makeni stands as a beacon of technological excellence and innovation. We are committed to cultivating the next generation of ICT leaders through a rigorous academic framework combined with hands-on practical experience.
                    </p>

                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-4/3 rounded-md overflow-hidden shadow-sm">
                    <img
                      src="/images/grouppic.jpg"
                      alt="Computer Science Department Faculty and Students"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
              <div className="group relative bg-linear-to-br from-white to-blue-50 rounded-md p-4 shadow-sm border border-blue-100 hover:shadow-md transition-all duration-500">

                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
                    OUR MISSION
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Driving Purpose & Impact</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Academic Excellence</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        To establish a society that promotes educational activities and brings forward the views and expectations of individuals to the society (CSSU)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                    <div className="shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Research & Innovation</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Foster groundbreaking research and technological innovation to solve complex societal challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-purple-200 transition-colors">
                    <div className="shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">Ethical Leadership</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Develop ICT professionals with strong ethical foundations and leadership capabilities for global impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-linear-to-br from-white to-purple-50 rounded-md p-6 shadow-sm border border-purple-100 hover:shadow-md transition-all duration-500 mt-5 lg:mt-0">

                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                    OUR VISION
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Future We're Building</h3>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-lg text-slate-700 leading-relaxed italic mb-6">
                      "To emerge as the <span className="font-semibold text-sky-600">premier center of excellence</span> To uphold our responsibility and as a guide to all members in relation to the society."
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <img
                      src="/images/kamarat.jpg"
                      alt="Visionary Leadership - Kamarat"
                      className="w-full rounded-2xl object-cover shadow-sm border-4 border-white"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}


        {activeTab === "staff" && (
          <div className='space-y-8 mt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {staff.map((staffMember: Staff, index: number) => (
                <div key={index} className='border border-sky-200 bg-white rounded-2xl p-5  shadow-sm hover:shadow-xl transition-all duration-300'>
                  <div className='flex justify-center mb-3'>
                    <img
                      src={staffMember.image}
                      alt={staffMember.name}
                      className='w-35 h-35 rounded-full object-cover border-4 border-sky-100 shadow-md'
                    />
                  </div>

                  <div className='text-center'>
                    <h3 className='text-lg font-black text-gray-800 mb-1'>{staffMember.name}</h3>
                    <p className='text-sky-600 font-semibold text-sm mb-3'>{staffMember.position}</p>

                    <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                      {staffMember.description}
                    </p>

                    {staffMember.focusArea && staffMember.focusArea.length > 0 && (
                      <div className='mb-4 flex flex-wrap gap-2 justify-center'>
                        {staffMember.focusArea.map((area, areaIndex) => (
                          <span
                            key={areaIndex}
                            className='inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold'
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contact" && (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-start'>
            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mt-1'>
              <h2 className='text-2xl font-black text-gray-800 mb-6'>Get In Touch</h2>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold text-sky-600 mb-3'>Department Address</h3>
                  <p className='text-gray-600 text-sm'>
                    Computer Science Department<br />
                    Sylvanus Koroma Campus, Yoni
                  </p>
                </div>

                <div>
                  <h3 className='text-lg font-semibold text-sky-600 mb-3'>Office Hours</h3>
                  <p className='text-gray-600 text-sm'>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white border border-gray-200 rounded-2xl p-6 shadow-sm'>
              <h2 className='text-2xl font-black text-gray-800 mb-6'>Contact Us Directly</h2>

              <div className='space-y-4'>
                <Link
                  to={"mailto:ikalokoh@unimak.edu.sl"}
                  className='flex items-center justify-center gap-3 bg-linear-to-r from-sky-400 to-blue-400 p-4 text-white rounded-xl hover:from-sky-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <FaMailBulk className='text-xl' />
                  <span className='font-semibold'>Send Email</span>
                </Link>

                <Link
                  to={"tel:+23278228338"}
                  className='flex items-center justify-center gap-3 bg-linear-to-r from-green-400 to-emerald-400 p-4 text-white rounded-xl hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <FaPhone className='text-xl' />
                  <span className='font-semibold'>Make a Call</span>
                </Link>

                <Link
                  to={"https://wa.me/23278228338"}
                  className='flex items-center justify-center gap-3 bg-linear-to-r from-green-500 to-green-600 p-4 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  <FaWhatsapp className='text-xl' />
                  <span className='font-semibold'>WhatsApp Message</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}


export default About;