/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Title.css';

const Title = ({ subTitle, title }) => {
  return (
    <div className='title'>
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

// PropTypes validation
Title.propTypes = {
  subTitle: PropTypes.string, // Validate subTitle as string
  title: PropTypes.string.isRequired, // Validate title as string and it's required
};

export default Title;

