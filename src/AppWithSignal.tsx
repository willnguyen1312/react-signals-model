import { useModel } from "@preact/signals-react";
import { signal, computed, createModel, effect } from "@preact/signals-core";

const AppModel = createModel(() => {
  const firstNumber = signal(0);
  const secondNumber = signal(0);
  const sum = computed(() => firstNumber.value + secondNumber.value);

  const setFirstNumber = (value: number) => {
    firstNumber.value = value;
  };

  const setSecondNumber = (value: number) => {
    secondNumber.value = value;
  };

  effect(() => {
    console.log(`sum changed ${sum.value}`);
  });

  return {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    sum,
  };
});

export default function App() {
  console.log("rendering app with signal");
  const { firstNumber, secondNumber, sum, setFirstNumber, setSecondNumber } =
    useModel(AppModel);

  return (
    <div>
      <p>First Number: {firstNumber}</p>
      <button onClick={() => setFirstNumber(firstNumber.value + 1)}>
        Increment First Number
      </button>
      <p>Second Number: {secondNumber}</p>
      <button onClick={() => setSecondNumber(secondNumber.value + 1)}>
        Increment Second Number
      </button>

      <p>Sum: {sum}</p>
    </div>
  );
}
