import styled from 'styled-components';

export const ContactStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e5e5ea;

  &:last-child {
    border-bottom: none;
  }

  & span {
    font-weight: 500;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff3b30;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e02925;
  }
`;

export const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;
