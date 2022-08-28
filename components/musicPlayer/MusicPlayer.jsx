import { MusicPlayerContainer } from "./MusicPlayer.style";

export function MusicPlayer(props) {

  console.log(props);

  return (
    <MusicPlayerContainer>
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/album/349507667" width="100%" height="160" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </MusicPlayerContainer>
  )
}
