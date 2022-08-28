import styled from "styled-components"

export const Paragraph = styled.p`
  font-weight: normal;
  font-size: .75rem;
  color: ${props => props.color ? props.color : "black"};
` 

export const Header2 = styled.h2`
  font-weight: ${props => props.weight ? "bold" : "normal"};
  font-size: 1.38rem;
  color: ${props => props.color ? props.color : "black"};
`

export const Header5 = styled.h5`
  font-weight: ${props => props.weight ? "bold" : "normal"};
  font-size: .88rem;
  color: ${props => props.color ? props.color : "black"};
`

export const NavLink = styled.p`
  font-size: 1rem;
  color: #fff;

  &:hover {
    color: #E86060;
    font-weight: 700;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: .3em;
    height: 1.5em;
  }

  &:hover::before {
    background-color: #E86060;
  }
`