import { Header5, Paragraph } from "../../../style-components";
import { CardItemContainer, Cover } from "./CardItem.style";
import { usePlayMusicContext } from "../../../context/playMusicContext";

export function CardItem({
  id, type, img, title, name
}) {
  const { setPlayMusic } = usePlayMusicContext()
  const HandleClick = () => setPlayMusic(id, type, true)

  return (
    <CardItemContainer>
      <Cover 
        src={img} 
        alt={`${title} album cover`} 
        onClick={() => HandleClick()}
        />
      <Header5 weight="bold" color="#555555">{title}</Header5>
      <Paragraph color="#828282" >{name}</Paragraph>
    </CardItemContainer>
  )
}
