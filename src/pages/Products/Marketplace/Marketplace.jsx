import React from 'react';
import { Link } from 'react-router-dom';
import StickyBar from './Catagories/Stickybar';

// Marketplace Test listings
const listings = [
  { id: 1, title: 'AirPods 2nd Gen', price: '$80', location: 'Riner, VA', imgSrc: '/path/to/airpods.jpg' },
  { id: 2, title: 'Custom Built PC (Gaming)', price: '$1,500', location: 'Pembroke, VA', imgSrc: '/path/to/pc.jpg' },
  { id: 3, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 4, title: 'iPhone 12', price: '$600', location: 'Christiansburg, VA', imgSrc: '/path/to/iphone.jpg' },
  { id: 5, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 6, title: 'AirPods 2nd Gen', price: '$80', location: 'Riner, VA', imgSrc: '/path/to/airpods.jpg' },
  { id: 7, title: 'Custom Built PC (Gaming)', price: '$1,500', location: 'Pembroke, VA', imgSrc: '/path/to/pc.jpg' },
  { id: 8, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 9, title: 'iPhone 12', price: '$600', location: 'Christiansburg, VA', imgSrc: '/path/to/iphone.jpg' },
  { id: 10, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 11, title: 'AirPods 2nd Gen', price: '$80', location: 'Riner, VA', imgSrc: '/path/to/airpods.jpg' },
  { id: 12, title: 'Custom Built PC (Gaming)', price: '$1,500', location: 'Pembroke, VA', imgSrc: '/path/to/pc.jpg' },
  { id: 13, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 14, title: 'iPhone 12', price: '$600', location: 'Christiansburg, VA', imgSrc: '/path/to/iphone.jpg' },
  { id: 15, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 16, title: 'AirPods 2nd Gen', price: '$80', location: 'Riner, VA', imgSrc: '/path/to/airpods.jpg' },
  { id: 17, title: 'Custom Built PC (Gaming)', price: '$1,500', location: 'Pembroke, VA', imgSrc: '/path/to/pc.jpg' },
  { id: 18, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
  { id: 19, title: 'iPhone 12', price: '$600', location: 'Christiansburg, VA', imgSrc: '/path/to/iphone.jpg' },
  { id: 20, title: 'Mountain Bike', price: '$200', location: 'Blacksburg, VA', imgSrc: '/path/to/bike.jpg' },
];

const Marketplace = () => {
  return (
    <div className="flex">
      {/* StickyBar Component */}
      <StickyBar />

      {/* Marketplace Listings */}
      <div className="flex-1 p-4 grid grid-cols-3 gap-6 ml-64">
        {listings.map((listing) => (
          <div
          //make this a link
            key={listing.id}
            className="rounded-lg overflow-hidden bg-gray-900 text-white shadow-lg"
          >
            <Link to={`/listing/${listing.id}`}>
              <img
                src={listing.imgSrc}
                alt={listing.title}
                className="w-full h-40 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-bold">{listing.title}</h3> 
              <p className="text-cyan_green font-semibold">{listing.price}</p>
              <p className="text-gray-400">{listing.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
