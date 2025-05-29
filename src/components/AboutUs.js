import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            About GravityIntel
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            At GravityIntel, we are pioneering the future of technology by empowering businesses with cutting-edge digital solutions. Our mission is to drive innovation, streamline operations, and create seamless tech integrations that transform industries.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            With a team of expert engineers and visionaries, we specialize in AI, IoT, and digital transformation, delivering future-ready solutions tailored to your needs. Join us on this journey to redefine what’s possible in the digital era.
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2">
          <img
            src="/images/hero2.png"
            alt="Digital Transformation Sport"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;