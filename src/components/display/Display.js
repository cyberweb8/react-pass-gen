import Button from '../button/Button';
import Container from '../container/Container';
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
            <Button className="copy-btn" iconClass="far fa-copy" />
            <Button className="generate-btn" iconClass="fas fa-sync-alt" />
          </div>
        </div>
        <Container />
      </div>
    </>
  );
};

export default Display;
