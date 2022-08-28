import styled from "styled-components"

export const AsideNavStyle = styled.aside`
  position: fixed;
  width: 20.6em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 3.125em 2.5em;
  background-color: #662323;

  & img {
    margin-bottom: 1.875em;
  }
`

export const NavStyle = styled.nav`
  & h2 {
    margin-bottom: .25em;
  }
  
  & li {
    margin-bottom: .5em;
  }
`