import React, { useState } from 'react';
import Search from './Search';
import { JobList } from './job/JobList';
import Job from './job/Job';

const Home = () => {
  const [Id, setId] = useState('');
  return (
    <div>
      <Search />
      <div className="container mx-auto  max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <JobList setId={setId} id={Id} />
          </div>
          <div className="hidden md:col-span-3 md:block">
            <Job id={Id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
