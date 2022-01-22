import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const { className, iconClass, label, handleClick } = props;
  return (
    <>
      <button className={className} label={label} onClick={handleClick}>
        <i className={iconClass} />
        {label}
      </button>
    </>
  );
  // eslint-disable-next-line no-unreachable
  Button.propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
    iconClass: PropTypes.string,
    handleClick: PropTypes.func,
  };
};

export default Button;
