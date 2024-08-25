import React from 'react';
import { Outlet } from 'react-router-dom';

const Universities = () => {
  return (
    <div>
      <h1>Universities</h1>
      <Outlet />
    </div>
  );
};

export default Universities;
