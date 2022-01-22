import PropTypes from 'prop-types';

import './Slider.css';

const Slider = (props) => {
  const { step, min, max, value, onChangeValue, defaultLenth } = props;

  const handleChange = (max) => (e) => {
    onChangeValue(e);
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
          defaultLenth={defaultLenth}
          onChange={handleChange(max)}
        />
        <span className="range-slider-value">10</span>
      </div>
    </div>
  );
  // eslint-disable-next-line no-unreachable
  Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    defaultLenth: PropTypes.number.isRequired,
    onChangeValue: PropTypes.func.isRequired,
  };
};

export default Slider;
