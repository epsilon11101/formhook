import useValidation from "../hook/use-validation";

const SimpleInput = () => {
  const {
    field: enteredName,
    enteredFieldIsValid: enteredNameIsValid,
    fieldInputIsInvalid: nameInputIsInvalid,
    FieldChangeHandler: nameChangeHandler,
    FieldBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useValidation((value) => value.trim() !== "");

  const {
    field: enteredAdress,
    enteredFieldIsValid: enteredAdressIsValid,
    fieldInputIsInvalid: adressInputIsInvalid,
    FieldChangeHandler: adressChangeHandler,
    FieldBlurHandler: adressBlurHandler,
    reset: resetAdress,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredAdressIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    resetName();
    resetAdress();
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : " form-control";
  const adressInputClasses = adressInputIsInvalid
    ? "form-control invalid"
    : " form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={adressInputClasses}>
        <label htmlFor="adress">Your Address</label>
        <input
          type="text"
          id="adress"
          onChange={adressChangeHandler}
          onBlur={adressBlurHandler}
          value={enteredAdress}
        />
        {adressInputIsInvalid && (
          <p className="error-text">Adress must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
