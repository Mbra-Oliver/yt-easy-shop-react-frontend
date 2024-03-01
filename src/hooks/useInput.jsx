import { useState } from "react";

export function useInput(defaultValue, validationFunction) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFunction(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  const fieldHaveError =
    (!didEdit && !valueIsValid) || (didEdit && !valueIsValid);

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: fieldHaveError,
    didEdit,
  };
}
