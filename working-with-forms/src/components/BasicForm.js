import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlur: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((val) => val.trim() !== " ");
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError:lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlur: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((val) => val.trim() !== " ");
  
  const {
    value: email,
    isValid: emailIsValid,
    hasError:emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlur: emailBlurHandler,
    reset: emailReset,
  } =  useInput((val) => val.includes("@"));


let formIsValid = false;

if (firstNameIsValid && lastNameIsValid && emailIsValid) {
  formIsValid = true;
}

const firstNameClasses = !firstNameHasError ? 'form-control' : 'form-control invalid';
const lastNameClasses = !lastNameHasError ? 'form-control' : 'form-control invalid';
const emailClasses = !emailHasError ? 'form-control' : 'form-control invalid';


  return (
    <form onSubmit={(e)=>{e.preventDefault();if(!formIsValid)return; console.log(firstName,lastName,email)}}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name"
          value={firstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter valid first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"
          value={lastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
           />
          {lastNameHasError&&<p className="error-text">Please enter valid last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name"
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
         />
          {emailHasError&&<p className="error-text">Please enter valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
