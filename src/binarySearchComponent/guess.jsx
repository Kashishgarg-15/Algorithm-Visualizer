import React, { useState } from 'react';
import RangeSlider from './doubleSlider';
import Button from '@mui/material/Button';

const Guess = ({ upper, lower, max, yesButton, noButton }) => {
  const [showRange, setShowRange] = useState(false);

  const toggleRange = () => {
    setShowRange(prev => !prev);
  };

  const getMid = () => {
    return Math.floor((upper + lower) / 2);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        <button
          className="btn btn-secondary btn-lg"
          type="button"
          onClick={toggleRange}
        >
          Toggle Range
        </button>
      </p>

      {showRange && (
        <div className="card card-body">
          <center>
            <RangeSlider upper={upper} lower={lower} max={max} />
          </center>
        </div>
      )}

      <h1>Is your number greater than {getMid()}?</h1>

      <div>
        <Button
          variant="contained"
          color="success"
          size="large"
          className="m-2"
          onClick={yesButton}
        >
          Yes
        </Button>

        <Button
          variant="contained"
          color="error"
          size="large"
          className="m-2"
          onClick={noButton}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default Guess;
