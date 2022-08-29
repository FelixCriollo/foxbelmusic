import { usePlayMusicContext } from "../../../context/playMusicContext";
import { Header5, Paragraph } from "../../../style-components";
import { ArtistPicture, CardArtistContainer } from "./CardArtist.style";

export function CardArtist({ name, fans, picture }) {
  return (
    <CardArtistContainer>
      <ArtistPicture src={picture} alt={name}/>
      <Header5>{name}</Header5>
      <Paragraph>{fans}</Paragraph>
    </CardArtistContainer>
  )
}
