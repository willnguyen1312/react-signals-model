import { signal, computed, createModel, effect } from "@preact/signals-core";

export const AppModel = createModel(() => {
  console.log("creating app model");
  const firstNumber = signal(0, { name: "firstNumber" });
  const secondNumber = signal(0, { name: "secondNumber" });
  const sum = computed(() => firstNumber.value + secondNumber.value, {
    name: "sum",
  });

  const incrementFirstNumber = () => {
    firstNumber.value = firstNumber.value + 1;
  };

  const incrementSecondNumber = () => {
    secondNumber.value = secondNumber.value + 1;
  };

  effect(() => {
    console.log(`sum changed ${sum.value}`);
  });

  return {
    firstNumber,
    incrementFirstNumber,
    secondNumber,
    incrementSecondNumber,
    sum,
  };
});
