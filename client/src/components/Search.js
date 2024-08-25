import React from 'react';
import { useState } from 'react';
// import { IoSearchOutline } from 'react-icons/io5';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Search = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    // 实现搜索逻辑
    console.log('Searching for:', jobTitle, 'in', location);
  };

  const handleClear = () => {
    setJobTitle('');
    setLocation('');
  };

  return (
    <div className="w-full px-2 py-2 sm:py-6 lg:py-2">
      <div className="w-full max-w-4xl mx-auto">
        <form className="flex flex-wrap items-center gap-4 bg-white shadow-lg p-2 w-full rounded-lg max-w-5xl mx-auto">
          <div className="relative flex-grow min-w-[200px] md:flex-grow">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              id="job-title"
              value={jobTitle}
              placeholder="Job title"
              onChange={(e) => setJobTitle(e.target.value)}
              className="rounded-full w-full pl-10 pr-4 py-2 focus:ring-1 focus:ring-international-orange-600 focus:outline-none md:border-none !sm:border !sm:border-international-orange-600"
            />
          </div>
          <div className="relative flex-grow min-w-[200px] md:flex-grow">
            <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-full border-international-orange-600 focus:ring-1 focus:ring-international-orange-600 focus:outline-none"
            />
          </div>

          <div className="flex flex-shrink-0 justify-between w-full gap-2 mt-4 md:mt-0 md:w-auto">
            <button
              onClick={handleSearch}
              className="flex-grow md:flex-grow-0 rounded-lg bg-international-orange-700 text-silver-50 font-bold px-6 py-2 hover:bg-international-orange-600 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-picton-blue-300"
            >
              Search
            </button>
            <button
              onClick={handleClear}
              className="flex-grow md:flex-grow-0 rounded-lg border border-international-orange-600 text-international-orange-600 px-6 py-2 hover:text-international-orange-700 hover:border-international-orange-700 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-gray-400"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
