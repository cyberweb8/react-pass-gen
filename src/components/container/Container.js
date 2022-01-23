import { useState } from 'react';
import Button from '../button/Button';
import CheckBox from '../checkbox/CheckBox';
import Slider from '../slider/Slider';
import './Container.css';

const checkbox_arr = [
  {
    id: 0,
    name: 'uppercase',
    label: 'Uppercase',
    isChecked: true,
  },
  {
    id: 1,
    name: 'lowercase',
    label: 'Lowercase',
    isChecked: true,
  },
  {
    id: 2,
    name: 'symbols',
    label: 'Symbols',
    isChecked: true,
  },
  {
    id: 3,
    name: 'numbers',
    label: 'Numbers',
    isChecked: true,
  },
];

const Container = () => {
  const [rangeValue, setRangeValue] = useState(12);
  const onChangeSlider = (e) => {
    setRangeValue(e.target.value);
  };

  const onChangeCheckBox = (e) => {
    // console.log(e.target.value);
  };

  return (
    <div className="password-settings">
      <h3>Use the slider, and select from the options</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <Slider
              min={1}
              max={100}
              step={1}
              value={parseInt(rangeValue)}
              onChangeValue={onChangeSlider}
              defaultLength={parseInt(rangeValue)}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="row checkbox-container">
            {checkbox_arr.map((i) => (
              <CheckBox
                key={i.id}
                name={i.name}
                label={i.label}
                value={true}
                checked={i.isChecked}
                disabled={false}
                onChange={onChangeCheckBox}
              />
            ))}
          </div>
        </div>
      </div>
      <br />
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
