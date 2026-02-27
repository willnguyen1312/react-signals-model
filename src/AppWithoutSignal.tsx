import { useState, useEffect } from "react";

export default function AppWithoutSignal() {
  console.log("rendering app without signal");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const sum = firstNumber + secondNumber;

  useEffect(() => {
    console.log(`sum changed ${sum}`);
  }, [sum]);

  return (
    <div>
      <p>First Number: {firstNumber}</p>
      <button onClick={() => setFirstNumber(firstNumber + 1)}>
        Increment First Number
      </button>
      <p>Second Number: {secondNumber}</p>
      <button onClick={() => setSecondNumber(secondNumber + 1)}>
        Increment Second Number
      </button>

      <p>Sum: {sum}</p>
    </div>
  );
}
