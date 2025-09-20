import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;

  & input {
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
  }

  & button {
    /* display: inline-block; */
    background-color: #007aff;
    color: white;
    font-size: 16px;
    padding: 12px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: #005ecb;
    }
  }
`;
