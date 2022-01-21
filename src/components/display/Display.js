import React from 'react';
import './Display.css';

const Display = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 password-display-container">
          <div>
            <div className="password-display">
              <input
                type="text"
                className="password-display-input"
                value="placeholder_value"
                readOnly
              />
            </div>
            <div className="password-description">
              <i className="fas fa-check-circle">Strong Password</i>
            </div>
          </div>
          <div className="password-display-icons">
            <button className="copy-btn">
              <i className="far fa-copy"></i>
            </button>
            <button className="generate-btn">
              <i className="fas fa-sync-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
