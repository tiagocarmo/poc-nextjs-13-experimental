'use client';

import { Button as SCButton } from './styles';

const ButtonCallback = ({ fnCallback, loading }) => {
  return (
    <SCButton
      onClick={fnCallback}
      disabled={loading}
      color='red'
    >
      Botão Callback
    </SCButton>
  );
}

export default ButtonCallback;

