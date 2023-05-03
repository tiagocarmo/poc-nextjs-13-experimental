import styled from "styled-components";

export const Button = styled.button`
border: none;
border-radius: 4px;
outline: none;
padding: 8px 16px;
font-size: 16px;
background-color: ${(props) => {
    console.log({ theme: props.theme });
    let color = 'gray';
    if (props.count > 0 && props.count <= 10) {
      color = props.theme.b;
    } else if (props.count >= 11) {
      color = props.theme.g;
    }
    return color;
  }}
`;
