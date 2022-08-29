import { MusicPlayerButton, MusicPlayerContainer } from "./MusicPlayer.style";
import { usePlayMusicContext } from "../../context/playMusicContext";

export function MusicPlayer(props) {
  const { state, setPlayMusic } = usePlayMusicContext()
  const { play, id, type } = state

  if(play) {
    return (
      <MusicPlayerContainer>
        <iframe title="deezer-widget" src={`https://widget.deezer.com/widget/dark/${id}/${type}`} width="100%" height="160" frameBorder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        
        <MusicPlayerButton
          onClick={() => setPlayMusic("", "", false)}
        >
          ❌
        </MusicPlayerButton>
      </MusicPlayerContainer>
    )
  } else {
    return null
  }

}


