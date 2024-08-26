import React from 'react';
import { useQuery } from '@apollo/client';
import { jobByIdQuery } from '../../lib/graphql/queries';

const Job = ({ id }) => {
  console.log('JOb', id);
  const jobId = parseInt(id, 10);
  const { loading, error, data } = useQuery(jobByIdQuery, {
    variables: { jobId: jobId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const { job } = data;
  return (
    <div className="bg-white border max-w-prose border-gray-200  rounded-lg p-4 text-left">
      {/* Job Title */}
      <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>

      {/* Company Name */}
      <p className="text-lg text-gray-600 mt-2">{job.company.name}</p>

      {/* Job Location */}
      <div className="flex items-center text-gray-500 mt-2">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
        <span>{job.location}</span>
      </div>

      {/* Posted Date */}
      <div className="text-gray-400 mt-2">Posted on: {job.formattedDate}</div>

      {/* Salary */}
      <div className="text-green-600 font-semibold text-lg mt-4">
        ${job.salary.toLocaleString()} per year
      </div>

      {/* Job Description */}
      <div className="mt-4 text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p>{job.description}</p>
      </div>

      {/* Company Information */}
      <div className="mt-6 text-gray-700">
        <h2 className="text-xl font-semibold mb-2">About {job.company.name}</h2>
        <p>{job.company.description}</p>
      </div>
    </div>
  );
};

export default Job;
