import PropTypes from 'prop-types';

import './CheckBox.css';

const CheckBox = (props) => {
  const { name, value, checked, label, onChange, disabled } = props;
  return (
    <div className="col-md-3">
      <label className="container">
        <h1>{label}</h1>
        <input
          type="checkbox"
          className="checkbox-input"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <span className="checkmark" style={{ opacity: disabled ? '0.7' : '' }}></span>
      </label>
    </div>
  );

  // eslint-disable-next-line no-unreachable
  CheckBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
  };
};

export default CheckBox;
