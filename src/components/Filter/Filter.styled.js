import styled from 'styled-components';

export const FilterInput = styled.input`
  width: 200px;
  margin-top: 5px;
  font-size: 16px;
  padding: 12px;
  border: 1px solid #d1d1d6;
  border-radius: 12px;
  background-color: #f9f9f9;
  outline: none;
  transition: border 0.2s ease;

  &:focus {
    border-color: #007aff;
    background-color: #ffffff;
  }
`;
