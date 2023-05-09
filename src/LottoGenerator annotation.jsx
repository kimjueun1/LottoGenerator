import React, { useState } from 'react';
import './LottoGenerator.scss';

function LottoGenerator() {
  const [numbers, setNumbers] = useState([]);

  const generateNumbers = () => {
    // 1부터 45까지의 숫자를 담은 배열 생성
    const allNumbers = Array.from({ length: 45 }, (_, index) => index + 1);

    // 랜덤하게 6개의 숫자 선택
    const selectedNumbers = [];
    while (selectedNumbers.length < 6) {
      const randomNumber =
        allNumbers[Math.floor(Math.random() * allNumbers.length)];
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
      }
    }

    // 선택된 숫자들을 정렬하여 상태 업데이트
    selectedNumbers.sort((a, b) => a - b);
    setNumbers(selectedNumbers);
  };

  return (
    <div>
      <h1>Lotto Number Generator</h1>
      <button onClick={generateNumbers}>Generate Numbers</button>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default LottoGenerator;
