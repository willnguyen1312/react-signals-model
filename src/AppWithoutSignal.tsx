import { useState, useEffect } from "react";

export default function AppWithoutSignal() {
  console.log("rendering app without signal");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const sum = firstNumber + secondNumber;

  useEffect(() => {
    console.log(`current sum: ${sum}`);
  }, [sum]);

  return (
    <>
      <FirstNumber firstNumber={firstNumber} />
      <button onClick={() => setFirstNumber(firstNumber + 1)}>
        Increment First Number
      </button>

      <SecondNumber secondNumber={secondNumber} />
      <button onClick={() => setSecondNumber(secondNumber + 1)}>
        Increment Second Number
      </button>

      <Sum sum={sum} />
    </>
  );
}

function FirstNumber({ firstNumber }: { firstNumber: number }) {
  console.log("rendering first number");
  return <p>First Number: {firstNumber}</p>;
}

function SecondNumber({ secondNumber }: { secondNumber: number }) {
  console.log("rendering second number");
  return <p>Second Number: {secondNumber}</p>;
}

function Sum({ sum }: { sum: number }) {
  console.log("rendering sum");
  return <p>Sum: {sum}</p>;
}
