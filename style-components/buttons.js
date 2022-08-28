import styled, {css} from "styled-components"

const baseBotton = css`
  border: none;
  border-radius: 100px;
  outline: none;
  background: none;
  padding: .5em 1.375em;
  font-size: .9rem;
  border: 1px solid transparent;
`

export const ButtonPrimary = styled.button`
  ${baseBotton}
  color: #fff;
  background-color: #E86060;
  border-color: #E86060;

  &:hover,
  &:active {
    background-color: transparent;
    color: #E86060;
  }
`

export const ButtonSecondary = styled.button`
  ${baseBotton}
  color: #E86060;
  background-color: transparent;
  border-color: #E86060;

  &:hover,
  &:active {
    background-color: #E86060;
    color: #fff;
  }
`

