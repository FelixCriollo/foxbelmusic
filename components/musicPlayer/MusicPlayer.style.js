import styled from "styled-components"

export const MusicPlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #000000cc;
  opacity: .99;
`

export const MusicPlayerButton = styled.button`
  background: #fff;
  position: absolute;
  border: none;
  right: .75em;
  padding: .45em;
  border-radius: .4em;

  &:hover {
    background: #E86060cc;
  }
`
