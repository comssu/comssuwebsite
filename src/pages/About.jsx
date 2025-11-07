import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

export default function About() {
  return (
    <>
    <NavBar />
      <main className="max-w-3xl pt-20 px-10 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to the department website. This page is about our mission, values, and what we do.
        </p>
        <p>
          If you see this text, the About page is rendering correctly.
        </p>
      </main>
      <Footer />
    </>
  );
}
