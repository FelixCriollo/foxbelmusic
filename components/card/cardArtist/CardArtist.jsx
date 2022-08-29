import { usePlayMusicContext } from "../../../context/playMusicContext";
import { Header5, Paragraph } from "../../../style-components";
import { ArtistPicture } from "./CardArtist.style";

export function CardArtist({ name, fans, picture }) {
  return (
    <div>
      <ArtistPicture src={picture} alt={name}/>
      <Header5>{name}</Header5>
      <Paragraph>{fans}</Paragraph>
    </div>
  )
}
