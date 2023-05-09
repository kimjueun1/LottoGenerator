import React, { useState, useEffect } from 'react';
import './LottoGenerator.scss';
import rabbitImg from './asset/img/rabbit.png';
function LottoGenerator() {
  const [numbers, setNumbers] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let intervalId;
    const generatedNumbers = new Set();

    if (isStarted && numbers.length < 6) {
      intervalId = setInterval(() => {
        while (generatedNumbers.size < 6) {
          const newNumber = Math.floor(Math.random() * 45) + 1;
          generatedNumbers.add(newNumber);
        }

        setNumbers([...generatedNumbers].sort((a, b) => a - b));
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [numbers, isStarted, setNumbers, setIsStarted]);

  const handleStartClick = () => {
    setNumbers([]);
    setIsStarted(true);
  };

  const handleResetClick = () => {
    setNumbers([]);
    setIsStarted(false);
  };

  return (
    <div className='LottoGenerator'>
      <h1>로또 번호 생성기</h1>

      {!isStarted && (
        <div className='main'>
          <img src={rabbitImg} alt='rabbitImg' className='rotating-image' />
          <button className='btn' onClick={handleStartClick}>
            Start
          </button>
        </div>
      )}
      {isStarted && (
        <>
          <div className='lotto-machine'>
            {numbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </div>
          <button className='btn' onClick={handleResetClick}>
            Reset
          </button>
        </>
      )}
    </div>
  );
}

export default LottoGenerator;
