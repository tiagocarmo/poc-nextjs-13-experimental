'use client';

const ButtonCallback = ({ fnCallback, loading }) => {
  return (
    <button
      onClick={fnCallback}
      disabled={loading}
    >
      Botão Callback
    </button>
  );
}

export default ButtonCallback;

