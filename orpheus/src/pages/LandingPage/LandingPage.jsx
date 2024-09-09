import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { twMerge } from 'tailwind-merge';

const LandingPage = () => {
  return (
    <div className="w-full max-w-screen-xl">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center my-2">

        {/* Introduction Texts */}
        <div className="flex w-full justify-center">
          <p className="flex items-center text-neutral-400 h-6 overflow-hidden">
            Discover unbeatable prices on
            <span className="flex flex-col animate-slide items-start h-full ml-1">
              <span className="h-full text-white text-nowrap">
                Textbooks
              </span>
              <span className="h-full text-white text-nowrap">
                Dorm Essentials
              </span>
              <span className="h-full text-white text-nowrap">
                Tech Gadgets
              </span>
              <span className="h-full text-white text-nowrap">
                Study Supplies
              </span>
              <span className="h-full text-white text-nowrap">
                Furnitures
              </span>
            </span>
          </p>
        </div>

        {/* Search Bar*/}
        <div className="flex flex-row justify-between h-12 min-w-96 sm:w-1/2 md:w-2/5 bg-[#2a2f38] p-1 rounded-full">
          <div className="flex flex-row items-center flex-grow mr-2">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="mx-4"
            />
            <input
              type="text"
              className="w-full outline-none bg-transparent"
              placeholder="Search for Anything"
            />
          </div>
          <button className="px-4 py-2 w-24 justify-center rounded-full bg-dark-main text-white hover:bg-dark-secondary hover:text-black no-underline transition">
          Search
          </button>
        </div>
        {/* Search Bar Code above*/}
      </div>


      {/* MiniHero Section */}
      <div className="">
      </div>

    </div>
  );
}


export default LandingPage;
