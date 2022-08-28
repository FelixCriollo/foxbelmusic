import { Header5, Paragraph } from "../../../style-components";
import { Cover } from "./CardItem.style";

export function CardItem(props) {
  return (
    <div>
      <Cover src={props.cover_medium} alt={`${props.title} album cover`} />
      <Header5 weight="bold" color="#555555">{props.title}</Header5>
      <Paragraph color="#828282" >{props.artist.name}</Paragraph>
    </div>
  )
}