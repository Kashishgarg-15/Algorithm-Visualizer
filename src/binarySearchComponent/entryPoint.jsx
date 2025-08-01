import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EntryPoint = ({ upper, setUpper, startGame }) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    const number = parseInt(input);

    if (input === '') {
      setError(true);
      setHelperText('Value required');
      setUpper(100); // default upper bound
    } else if (isNaN(number) || number <= 0) {
      setError(true);
      setHelperText('Enter a valid number > 0');
    } else {
      setError(false);
      setHelperText('');
      setUpper(number);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <TextField
        error={error}
        helperText={helperText}
        label="Upper Number"
        type="number"
        variant="outlined"
        onChange={handleChange}
      />
      <br />
      <br />
      <h1>Guess a number between 0 and {upper}</h1>
      <br />
      <Button
        variant="contained"
        color="warning"
        size="large"
        onClick={startGame}
        disabled={error}
      >
        Start the Game
      </Button>
    </div>
  );
};

export default EntryPoint;
