import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import './Slider.css';

const Slider = (props) => {
  const { step, min, max, value, onChangeValue, defaultLength } = props;
  const rangeRef = useRef();
  let [range, setRange] = useState();

  const activeRangeColor = '#4aa1f3';
  const rangeBackground = '#d7dcdf';

  const handleChange = (max) => (e) => {
    onChangeValue(e);
    const value = e.target.value;
    setRange(value);
    const progress = (value / max) * 100 + '%';
    const newBackground = `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`;
    rangeRef.current.style.background = newBackground;
  };

  if (range !== defaultLength || !range) {
    range = defaultLength;
  }
  const progressValue = range;
  const progress = (progressValue / max) * 100 + '%';
  const styleInput = {
    background: `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`,
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <input
          type="range"
          className="range-slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange(max)}
          style={styleInput}
          ref={rangeRef}
        />
        <span className="range-slider-value">{defaultLength}</span>
      </div>
    </div>
  );
  // eslint-disable-next-line no-unreachable
  Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    defaultLength: PropTypes.number.isRequired,
    onChangeValue: PropTypes.func.isRequired,
  };
};

export default Slider;
