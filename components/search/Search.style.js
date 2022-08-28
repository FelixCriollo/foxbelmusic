import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 32em;
  border: none;
  border-radius: 100px;
  border: 1px solid #828282;
  padding: .4em 1em ;

  &:hover,
  &:focus {
    border: 1px solid red;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 1.1em;
  border: none;
  outline: none;
  color: #828282;
`

export const Button = styled.button`
  background: transparent;
  border: none;

  &:hover {
    transform: scale(1.2);
  }
`
