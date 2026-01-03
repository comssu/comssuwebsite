import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Society: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className='fixed top-0 bottom-0 left-0 right-0'>
        <div className='pt-25 flex justify-center items-center flex-col gap-2'>
          <img src="/images/sad.png" className='w-15' />
          <p className='text-center text-sm font-semibold'>No Student with full membership!</p>
        </div>
        {/* <Link to={"/society/signin"} className='bg-linear-to-br from-amber-400 to-amber-600 font-semibold text-white fixed bottom-30 right-5 shadow-sm px-2 py-1 rounded-full'>Signin</Link> */}
      </main>
      <Footer />
    </>
  )
}

export default Society