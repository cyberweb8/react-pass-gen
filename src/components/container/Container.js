import Button from '../button/Button';
import Slider from '../slider/Slider';
import './Container.css';

const Container = () => {
  const onChangeSlider = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="password-settings">
      <h3>Use the slider, and select from the options</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <Slider
              min={1}
              max={60}
              step={1}
              value={10}
              onChangeValue={onChangeSlider}
              defaultLength={10}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="row checkbox-container">Checkbox component</div>
        </div>
      </div>

      <div className="text-center">
        <div className="row">
          <div className="col-md-12">
            <Button className="btn password-btn" label="Copy Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
