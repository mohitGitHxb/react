import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {

  const amountInputRef = useRef();
  const [AmountIsValid, setAmountIsValid] = useState(true);
  const submitHandler=(event)=>{
    event.preventDefault();

    const enteredAmount = parseInt(amountInputRef.current.value);
    if (enteredAmount<1||enteredAmount>5||amountInputRef.current.value.trim().length === 0) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);

  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!AmountIsValid && <p>Enter a Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;