import React from 'react';

const JobItem = (props) => {
  console.log(props);
  return <div>{props.item.title}</div>;
};

export default JobItem;
