import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  font-size: 16px;
  background-color: ${(props) => props.color || 'gray'}
`;
