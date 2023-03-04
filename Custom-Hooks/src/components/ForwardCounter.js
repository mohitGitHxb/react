import { useState, useEffect } from 'react';
import useCounter from '../Hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter = useCounter({forward:true , increment:1});

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
