import React from "react";
import PropTypes from "prop-types";


import "../styles/Description.css";

const Description = ({ text, src, alt, message, visible, level }) => (
  <div className="description">
    <p className="description-text">{text}</p>
  
 
  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  level: PropTypes.string.isRequired
};

export default Description;
