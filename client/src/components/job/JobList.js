import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import JobItem from './JobItem';
import { GET_JOBS } from '../../lib/graphql/queries';
import Pagination from '../Pagination';

// 定义 GraphQL 查询
const pageSize = 3; // 每页显示的项目数

export const JobList = (props) => {
  const { id, setId } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, data } = useQuery(GET_JOBS, {
    variables: { limit: pageSize, offset: pageSize * (currentPage - 1) },
  });
  useEffect(() => {
    if (data && data.jobs && data.jobs.items && data.jobs.items.length > 0) {
      // console.log("id",data.jobs.items[0].id);
      setId(data.jobs.items[0].id);
    }
  }, [data, setId]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const items = data?.jobs?.items || [];
  const totalCount = data?.jobs?.totalCount;

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
        <div key={item.id} className="w-full px-4 mb-2">
          <JobItem item={item} jobId={id} setId={props.setId} />
        </div>
      ))}
      {/* </div> */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(totalCount / pageSize)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};
