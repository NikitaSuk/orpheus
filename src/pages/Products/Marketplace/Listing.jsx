import React from 'react';

const listings = [
  { 
    id: 1, 
    title: 'AirPods 2nd Gen', 
    price: '$80', 
    location: 'Riner, VA', 
    imgSrc: '/path/to/airpods.jpg',
    description: 'Barely used AirPods 2nd Gen, in excellent condition. Comes with original charging case.'
  },
];

const ListingDetail = () => {
  const listing = listings[0];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 md:w-1/2">
          <img src={listing.imgSrc} alt={listing.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{listing.title}</h1>
            <p className="text-2xl font-semibold text-green-600 mt-2">{listing.price}</p>
            <p className="text-white mt-2">{listing.location}</p>
          </div>
          <div className="mt-6">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white">Description</h2>
        <p className="text-white mt-4">{listing.description}</p>
      </div>
    </div>
  );
};

export default ListingDetail;
