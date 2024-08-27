import React from 'react';
import logo from '../../assets/vervio_logo.jpeg';
// const truncateDescription = (description, maxLength) => {
//   if (description.length > maxLength) {
//     return description.slice(0, maxLength) + '...';
//   }
//   return description;
// };
const JobItem = (props) => {
  const { jobId, item, setId } = props;
  const { id, title, location, salary, company, postedAt } = item;
  const isActive = jobId === id;
  return (
    <div
      onClick={() => {
        setId(id);
      }}
      className={`border max-w-prose border-gray-200 rounded-lg p-6 shadow-sm mb-4 transition-bg duration-200 group
        ${
          isActive ? 'bg-blue-50 hover:bg-gray-50' : 'bg-white hover:bg-gray-50'
        }`}
    >
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
