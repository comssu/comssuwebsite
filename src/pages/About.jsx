import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import StaffExcerpt from '../components/StaffExcerpt';
import staff from '../data/staff';
import { Link } from 'react-router-dom';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
    <NavBar />
      <main className="max-w-3xl mx-auto py-20 px-5">
        <div className='flex w-full justify-center gap-3 mb-3 text-sm'>
          <button onClick={() => setActiveTab("about")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer ${activeTab === "about" && "bg-sky-600 text-white"}`}>About</button>
          <button onClick={() => setActiveTab("staff")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer ${activeTab === "staff" && "bg-sky-600 text-white"}`}>Staff</button>
          <button onClick={() => setActiveTab("contact")} className={`px-2.5 py-1.5 shadow-sm rounded-full text-sky-600 cursor-pointer ${activeTab === "contact" && "bg-sky-600 text-white"}`}>Contact</button>
        </div>
        {activeTab === "about" && <div className='p-5 border-2 border-sky-400 bg-sky-50 grid grid-cols-1 gap-8 text-center items-center rounded-2xl sm:max-w-md mx-auto'>
          <div>
            <h2 className="text-md font-black">ABOUT US</h2>
            <p className="text-sm mb-2">
              The Computer Science Department at the University of Makeni is a hub for innovation, research, and ICT capacity building. Our programs combine theoretical knowledge with practical application to prepare students for ICT careers in Sierra Leone and beyond.
            </p>       
            <img src="/images/grouppic.jpg" alt="" className='rounded-sm' />
          </div>
          <div>
            <h2 className="text-md font-black ">VISION</h2>
            <p className="mb-2 text-sm">
              A leading center for ICT education, research, and innovation driving digital transformation.
            </p>   
            <img src="/images/kamarat.jpg" alt="" className='rounded-sm' />
          </div>   
          <div>
            <h2 className="text-md font-black text-left">MISSION</h2>
            <ul className="text-sm mb-2 list-disc list-inside text-left">
              <li>Provide quality education.</li>
              <li>Foster innovation and research to address local & global challenges.</li>
              <li>Develop ICT professionals with strong ethical values and problem-solving skills.</li>
            </ul>       
            <img src="/images/hassanatu.jpg" alt="" className='rounded-sm' />
          </div>    
        </div>}
        {activeTab === "staff" && <div className='px-5 gap-3 text-center grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 items-center rounded-2xl max-w-5xl mx-auto'>
          {staff.map(s => <StaffExcerpt staff={s} />)}
        </div>}
        {activeTab === "contact" && <div className='px-5 gap-3 text-center grid grid-cols-1 rounded-2xl'>
          <Link to={"mailto:ikalokoh@unimak.edu.sl"} className='flex flex-col items-center bg-linear-to-r from-sky-400 to-blue-400 p-3 text-white rounded-md gap-1 cursor-pointer '>
            <FaMailBulk />
            Email
          </Link>
          <Link to={"tel:+23278228338"} className='flex flex-col items-center bg-linear-to-r from-sky-400 to-blue-400 p-3 text-white rounded-md gap-1 cursor-pointer '>
            <FaPhone />
            Call
          </Link>
          <Link to={"https://wa.me/23278228338"} className='flex flex-col items-center bg-linear-to-r from-sky-400 to-blue-400 p-3 text-white rounded-md gap-1 cursor-pointer '>
            <FaWhatsapp />
            Whatsapp
          </Link>
        </div>}
      </main>
      <Footer />
    </>
  );
}
