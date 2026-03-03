import { useModel } from "@preact/signals-react";
import { AppModel } from "./model";

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
      <p>First Number: {firstNumber}</p>
      <button onClick={incrementFirstNumber}>Increment First Number</button>

      <p>Second Number: {secondNumber}</p>
      <button onClick={incrementSecondNumber}>Increment Second Number</button>

      <p>Sum: {sum}</p>
    </>
  );
}
