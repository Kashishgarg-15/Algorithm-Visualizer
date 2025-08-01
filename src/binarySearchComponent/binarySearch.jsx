import React, { useState } from 'react';
import EntryPoint from './entryPoint';
import Search from './search';
import Navbar from './navbar';

const BinarySearch = () => {
  const [upper, setUpper] = useState(100);
  const [lower, setLower] = useState(0);
  const [max, setMax] = useState(100);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartGame = () => {
    setIsRunning(true);
  };

  const handleRestart = () => {
    setIsRunning(false);
    setUpper(100);
    setLower(0);
  };

  const handleYes = () => {
    const mid = Math.floor((upper + lower) / 2);
    setLower(mid + 1);
  };

  const handleNo = () => {
    const mid = Math.floor((upper + lower) / 2);
    setUpper(mid);
  };

  const handleSetUpper = (up) => {
    let val = parseInt(up);
    if (isNaN(val) || val <= 0) {
      val = 100;
    }
    setUpper(val);
    setMax(val);
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <center>
        {!isRunning ? (
          <EntryPoint
            startGame={handleStartGame}
            upper={upper}
            setUpper={handleSetUpper}
          />
        ) : (
          <Search
            yesButton={handleYes}
            noButton={handleNo}
            upper={upper}
            lower={lower}
            max={max}
            onRestart={handleRestart}
          />
        )}
      </center>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <p>Lower Bound: {lower}</p>
        <p>Upper Bound: {upper}</p>
      </div>
    </div>
  );
};

export default BinarySearch;
