import React from 'react';
import profileDescription from '../data/profileDescription.json';

const About = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b  text-white py-8 px-4">
      <div className="container mx-auto grid gap-6 sm:grid-cols-2 grid-cols-12">

        <div className="col-span-12 rounded-lg backdrop-blur-xl shadow-2xl p-6">

          {/* About Section */}
          <section className="col-span-12 rounded-lg backdrop-blur-xl my-10 shadow-2xl py-6 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-justify leading-relaxed whitespace-pre-line">
              {profileDescription.about}
            </p>
          </section>

          {/* Details Section */}
          <section className="col-span-12 rounded-lg backdrop-blur-xl my-10 shadow-2xl py-6">
            <h1 className="text-3xl font-bold mb-5 ">
              Details
            </h1>
            <p className="text-lg leading-relaxed whitespace-pre-line">
              {profileDescription.details}
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default About;
