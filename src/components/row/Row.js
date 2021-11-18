import React from 'react';
import './Row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-5">
        {left}
      </div>
      <div className="col-md-7">
        {right}
      </div>
    </div>
  );
};

export default Row;
