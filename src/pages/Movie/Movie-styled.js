import styled from 'styled-components';

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
  font-size: 18px;
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background: white;
  border-radius: 4px;
  border: 1;
  font-weight: bold;
  font-size: 18px;
  line-height: 1.85;
  text-align: center;
  letter-spacing: 0.06em;
  color: black;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: blue;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
`;
