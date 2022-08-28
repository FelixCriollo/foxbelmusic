import styled from "styled-components"

export const InfoCardContainer = styled.div`
  display: flex;
  width: min(100%, 70em);
  overflow: hidden;
  border-radius: .25em;
  margin-bottom: 2.5em;
  background: ${props => props.bgImg && `url(${props.bgImg})`};
  box-shadow:inset 0 0 0 2000px #EB575788;
  background-size: cover;
`

export const InfoCardImg = styled.img`
  width: 255px;
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
`

export const InfoCardContent = styled.div`
  padding: 2.5em 1.88em 1.3em 1.88em;
  display: flex;
  flex-direction: column;
`

export const InfoCardButtons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1.25em;
`

export const InfoCardBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin-block: 1em;
`