import react from 'react';
import useCounter from '../Hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  
  const counter = useCounter({forward:false,increment:Math.round(Math.random().toPrecision(4)*5)});
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
