import styled from "styled-components";
console.log('Possível problema: Parametro aceito, mas não faz o rerender, recriando o css/chunk');

export const Button = styled.button`
border: none;
border-radius: 4px;
outline: none;
padding: 8px 16px;
font-size: 16px;
background-color: ${(props) => {
    console.log({ theme: props.theme });
    let color = 'black';
    if (props.count >= 0 && props.count <= 10) {
      color = props.theme.b;
    } else {
      color = props.theme.g;
    }
  }}
`;
