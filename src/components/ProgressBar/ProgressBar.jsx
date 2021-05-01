import React from "react";
import PropTypes from "prop-types";

const ProgressBar = (props) => {
  const getColor = (precent) => {
    if (props.percent === 1000) return "green";
    return props.percent > 50 ? "lightgreen" : "red";
  };

  const getWidthAsPercentOfTotalWidth = () => {
    return parseInt(props.width * (props.percent / 100), 10);
  };

  return <div style={{ border: "solid 1px lightgray", width: width }}>
      <div style={{
          width: getWidthAsPercentOfTotalWidth(),
          height: props.height,
          backgroundColor: getColor(props.percent)
      }}></div>
  </div>;
};

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
}

ProgressBar.defaulProps = {
    height: 5,
}

export default ProgressBar;
