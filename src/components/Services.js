import React from 'react';

const servicesData = [
  {
    id: 1,
    img: 'https://via.placeholder.com/150',
    title: 'Service One',
    description: 'Description for service one.',
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/150',
    title: 'Service Two',
    description: 'Description for service two.',
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/150',
    title: 'Service Three',
    description: 'Description for service three.',
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/150',
    title: 'Service Four',
    description: 'Description for service four.',
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/150',
    title: 'Service Five',
    description: 'Description for service five.',
  },
  {
    id: 6,
    img: 'https://via.placeholder.com/150',
    title: 'Service Six',
    description: 'Description for service six.',
  },
  {
    id: 7,
    img: 'https://via.placeholder.com/150',
    title: 'Service Seven',
    description: 'Description for service seven.',
  },
  {
    id: 8,
    img: 'https://via.placeholder.com/150',
    title: 'Service Eight',
    description: 'Description for service eight.',
  },
  {
    id: 9,
    img: 'https://via.placeholder.com/150',
    title: 'Service Nine',
    description: 'Description for service nine.',
  },
];

const Services = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {servicesData.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
