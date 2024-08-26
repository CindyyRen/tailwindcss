import React from 'react';

const Button = (props) => {
  return (
    <button className="flex-grow md:flex-grow-0 rounded-lg bg-blue-600 text-silver-50 font-bold px-6 py-2 hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-0 focus:ring-gray-400">
      {props.children}
    </button>
  );
};

export default Button;
