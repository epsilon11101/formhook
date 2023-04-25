import { useState } from "react";

const useValidation = (validateValue) => {
  const [field, setField] = useState("");
  const [fieldTouched, setFieldTouched] = useState(false);

  const enteredFieldIsValid = validateValue(field);
  const fieldInputIsInvalid = !enteredFieldIsValid && fieldTouched;

  const FieldChangeHandler = (e) => {
    setField(e.target.value);
  };

  const FieldBlurHandler = () => {
    setFieldTouched(true);
  };

  const reset = () => {
    setField("");
    setFieldTouched(false);
  };

  return {
    field,
    enteredFieldIsValid,
    fieldInputIsInvalid,
    reset,
    FieldBlurHandler,
    FieldChangeHandler,
  };
};

export default useValidation;
