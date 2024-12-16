document.addEventListener('DOMContentLoaded', () => {
  const inputComponents = [
    ...document.querySelectorAll<HTMLInputElement>(
      'input[type="number"].app-elem-input',
    ),
  ];

  const computeResult = () => {
    /* const result = inputComponents[0].value + inputComponents[1].value; */
    /* const result = inputComponents.reduce((result, inputComponents) => {
        return result + inputComponents.valueAsNumber;
      }, 0) */

    const result = inputComponents.reduce(
      (result, inputComponent) => result + inputComponent.valueAsNumber,
      0,
    );

    const output = document.querySelector<HTMLOutputElement>(
      'output.app-elem-result',
    );

    if (output !== null) {
      output.value = `${result}`;
    } else {
      console.error('output.app-elem-result not found');
    }
  };

  inputComponents.forEach((inputComponent) => {
    inputComponent.addEventListener('change', computeResult);
  });

  computeResult();
});
