import React from 'react';
import { useQuery, gql } from '@apollo/client';
import JobItem from './JobItem';

// 定义 GraphQL 查询
const GET_JOBS = gql`
  query GET_JOBS {
    jobs {
      items {
        id
        description
        location
        postedAt
        salary
        title
        companyId
        company {
          id
          description
          name
        }
      }
    }
  }
`;

export const JobList = () => {
  const { loading, error, data } = useQuery(GET_JOBS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const items = data?.jobs?.items || [];
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <JobItem item={item} />
      ))}
    </>
  );
};
