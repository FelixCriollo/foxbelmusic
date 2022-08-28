import styled from "styled-components"

export const CardItemContainer = styled.div`
  position: relative;
  
  &::before {
    content: " ";
    position: absolute;
    width: 32px;
    height: 42px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -90%);
    z-index: 10;
  }
  
  &:hover::before {
    background: url("/play.png");
  }

  &:hover {
    filter: contrast(150%);
  }

  & h5 {
    margin-bottom: .5em;
  }
`

export const Cover = styled.img`
  position: relative;
  width: 100%;  
  height: 10em;
  object-fit: cover;
  border-radius: .2em;
  margin-bottom: .5em;

`
