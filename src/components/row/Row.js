import React from 'react';
import PropTypes from 'prop-types';
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

Row.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;
