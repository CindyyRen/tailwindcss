import React from 'react';
import Search from './Search';
import { JobList } from './job/JobList';

const Home = () => {
  return (
    <div>
      <Search />
      <JobList />
    </div>
  );
};

export default Home;
