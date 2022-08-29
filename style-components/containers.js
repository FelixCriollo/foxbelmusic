import styled, {css} from "styled-components"

const grid = css`
  width: 100%;
  margin-block: 1.5em;
  display: grid;
`

export const CardContainer = styled.ul`
  ${grid}
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 1.38em;
`

export const ArtistContainer = styled.ul`
  ${grid}
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 3em;
`
