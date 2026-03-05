import { useModel, type ReadonlySignal } from "@preact/signals-react";
import { AppModel } from "./model";

// const {
//   firstNumber,
//   secondNumber,
//   sum,
//   incrementFirstNumber,
//   incrementSecondNumber,
// } = new AppModel();

export default function App() {
  console.log("rendering app with signal");
  const {
    firstNumber,
    secondNumber,
    sum,
    incrementFirstNumber,
    incrementSecondNumber,
  } = useModel(AppModel);

  return (
    <>
      <FirstNumber firstNumber={firstNumber} />
      <button onClick={incrementFirstNumber}>Increment First Number</button>

      <SecondNumber secondNumber={secondNumber} />
      <button onClick={incrementSecondNumber}>Increment Second Number</button>

      <Sum sum={sum} />
    </>
  );
}

function FirstNumber({ firstNumber }: { firstNumber: ReadonlySignal<number> }) {
  console.log("rendering first number");
  return <p>First Number: {firstNumber.value}</p>;
}

function SecondNumber({
  secondNumber,
}: {
  secondNumber: ReadonlySignal<number>;
}) {
  console.log("rendering second number");
  return <p>Second Number: {secondNumber.value}</p>;
}

function Sum({ sum }: { sum: ReadonlySignal<number> }) {
  console.log("rendering sum");
  return <p>Sum: {sum.value}</p>;
}
