import React from 'react';
import logo from '../../assets/vervio_logo.jpeg';
// const truncateDescription = (description, maxLength) => {
//   if (description.length > maxLength) {
//     return description.slice(0, maxLength) + '...';
//   }
//   return description;
// };
const JobItem = (props) => {
  const { item, setId } = props;
  const { title, location, salary, company, postedAt } = item;
  return (
    <div className="bg-white border max-w-prose border-gray-200 rounded-lg p-6 shadow-sm mb-4 hover:bg-gray-50 transition-bg duration-200 group">
      <div className="flex items-start">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="ml-4">
          <h2 className="text-2xl font-bold text-gray-800 text-left group-hover:underline group-hover:underline-offset-2">
            {title}
          </h2>
          <p className="text-gray-500  text-left">{company.name}</p>
          <p className="text-gray-600  text-left">{location}</p>
          <p className="text-gray-400  text-left">
            {new Date(postedAt).toLocaleDateString()}
          </p>
          <p className="text-green-600 font-semibold my-2  text-left">
            ${salary.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
