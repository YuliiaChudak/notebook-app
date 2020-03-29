import React from 'react';
import PropTypes from 'prop-types';

const Property = ({ name, value }) => {
  if (!value) {
    return null;
  }

  return (
    <p>
      <span className="date">
        {name}: {value}
      </span>
    </p>
  );
};

Property.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
};

export default Property;
