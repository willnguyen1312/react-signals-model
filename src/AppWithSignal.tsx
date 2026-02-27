import { useModel } from "@preact/signals-react";
import { AppModel } from "./model";

export default function App() {
  console.log("rendering app with signal");
  const { firstNumber, secondNumber, sum, setFirstNumber, setSecondNumber } =
    useModel(AppModel);

  return (
    <>
      <p>First Number: {firstNumber}</p>
      <button onClick={() => setFirstNumber(firstNumber.value + 1)}>
        Increment First Number
      </button>

      <p>Second Number: {secondNumber}</p>
      <button onClick={() => setSecondNumber(secondNumber.value + 1)}>
        Increment Second Number
      </button>

      <p>Sum: {sum}</p>
    </>
  );
}
