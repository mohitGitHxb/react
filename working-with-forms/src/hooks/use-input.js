import React,{useReducer, useState} from 'react'


const initialInputState = {
  value: '',
  isTouched:false,

}
const inputStateReducer = (state,action)=>{
  if (action.type === 'INPUT') {
    return {
      value:action.value,
      isTouched:state.isTouched,
    }
  }
  else if (action.type === 'BLUR'){
    return{
      isTouched:true,
      value:state.value,
    };
  }
  else if (action.type === 'RESET') {
    return {
      isTouched:false,
      value: ``,
    }
  }
  return initialInputState;
}

const useInput = (validateValue) => {

  const [inputState,dispatchInputState] = useReducer(inputStateReducer,initialInputState);

  //   const [enteredValue, setEnteredValue] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

const valueChangeHandler = event => {
    // setEnteredValue(event.target.value);
    dispatchInputState({
      type:'INPUT',
      value:event.target.value,
    })
}

const inputBlur = event=> {
    // setIsTouched(true);
    dispatchInputState({
      type:'BLUR',
    })
};

const reset = ()=>{
    // setEnteredValue('');
    // setIsTouched(false);
    dispatchInputState({
      type:'RESET',
    })
}
  return (
    {
        value: inputState.value,
        isValid:valueIsValid,
        hasError: hasError,
        valueChangeHandler: valueChangeHandler,
        inputBlur: inputBlur,
        reset: reset
    }
  )
}

export default useInput;