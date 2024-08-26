import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import JobItem from './JobItem';
import { GET_JOBS } from '../../lib/graphql/queries';

// 定义 GraphQL 查询

export const JobList = (props) => {
  const { setId } = props;
  const { loading, error, data } = useQuery(GET_JOBS);
  useEffect(() => {
    if (data && data.jobs && data.jobs.items && data.jobs.items.length > 0) {
      // console.log("id",data.jobs.items[0].id);
      setId(data.jobs.items[0].id);
    }
  }, [data, setId]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const items = data?.jobs?.items || [];

  return (
    // 使用grid
    // <div className="container max-w-6xl mx-auto">
    //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    //     {items.map((item) => (
    //       <div className="">
    //         <JobItem item={item} />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    //使用flex
    <div className="px-4 max-w-6xl">
      {/* <div className="flex flex-wrap -mx-4"> */}
      {items.map((item) => (
        <div key={item.id} className="w-full px-4 mb-4">
          <JobItem item={item} setId={props.setId} />
        </div>
      ))}
      {/* </div> */}
    </div>
  );
};
