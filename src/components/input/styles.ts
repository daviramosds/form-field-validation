import styled from "styled-components";

export const DefaultInput = styled.input`
  width: 250px;
  height: 40px;

  padding: 0 7px;

  outline: none;
  border: none;
  border-bottom: 2px solid #f5f5f5;
  border-radius: 3px;

  background-color: #f5f5f5;
  color: #555;

  font-weight: 500;
  font-size: 0.875rem;

  transition: 0.1s;

  &:focus {
    border-bottom: 2px solid #60a5fa;
  }
`;

export const SubmitInput = styled.input`
  width: 100px;
  height: 40px;

  padding: 0 7px;

  outline: none;
  border: none;
  border-radius: 3px;

  background-color: #60a5fa;
  color: white;

  font-weight: 500;
  font-size: 0.875rem;

  transition: 0.1s;

  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid #60a5fa;
    background-color: white;
    color: #60a5fa;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: #e57373;
  }

  .error {
    border-bottom: 2px solid #e57373;
    &:focus {
      border-bottom: 2px solid #60a5fa;
    }
  }
`;
