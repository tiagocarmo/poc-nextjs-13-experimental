'use client';

import { useState } from 'react';
import { Button as SCButton } from './styles';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <SCButton
      onClick={() => setCount(count + 1)}
      count={count}
      type='button'
    >
      Botão {count}
    </SCButton>
  )
}

export default Button;

