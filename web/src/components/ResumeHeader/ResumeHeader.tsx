import React from 'react';

const ResumeHeader = ({ name, title}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{title}</h3>
    </div>
  );
};

export default ResumeHeader;
