import React from 'react';

const servicesData = [
  {
    img: '/images/hero1.png',
    heading: 'Digital Transformation',
    description: 'Transform your business with our end-to-end digital solutions, connecting systems and streamlining operations for the future.',
  },
  {
    img: '/images/hero2.png',
    heading: 'AI-Powered Innovation',
    description: 'Leverage artificial intelligence to drive innovation, automate processes, and unlock new opportunities for growth.',
  },
  {
    img: '/images/hero3.png',
    heading: 'Seamless Tech Integration',
    description: 'Integrate your devices and systems seamlessly with our IoT and connectivity solutions, ensuring a unified workflow.',
  },
  {
    img: '/images/hero4.png',
    heading: 'Future-Ready AI Solutions',
    description: 'Prepare for the future with scalable AI solutions designed to adapt and evolve with your business needs.',
  },
  {
    img: '/images/hero5.png',
    heading: 'Expert Tech Support',
    description: 'Our dedicated team provides 24/7 support, ensuring your tech infrastructure runs smoothly and efficiently.',
  },
  {
    img: '/images/hero1.png',
    heading: 'Cloud Solutions',
    description: 'Migrate to the cloud with ease, ensuring secure, scalable, and efficient operations for your business.',
  },
  {
    img: '/images/hero2.png',
    heading: 'Data Analytics',
    description: 'Unlock actionable insights with our advanced data analytics services, empowering data-driven decisions.',
  },
  {
    img: '/images/hero3.png',
    heading: 'Cybersecurity Services',
    description: 'Protect your business with our robust cybersecurity solutions, safeguarding your data and systems.',
  },
  {
    img: '/images/hero4.png',
    heading: 'Custom Software Development',
    description: 'Build tailored software solutions that meet your unique business needs, designed for performance and scalability.',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={service.img}
                alt={service.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h1>Hello</h1>
                <h3 className="text-xl font-semibold mb-3">{service.heading}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;