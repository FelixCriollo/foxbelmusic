import { 
  ButtonPrimary, 
  ButtonSecondary, 
  Header2, 
  Header5, 
  Paragraph } 
from "../../../style-components";
import { 
  InfoCardBody, 
  InfoCardButtons, 
  InfoCardContainer, 
  InfoCardContent, 
  InfoCardImg 
} from "./InfoCard.style";

export function InfoCard({artist, topAlbum}) {
  
  return (
    <InfoCardContainer bgImg={topAlbum.cover_xl}>
      <InfoCardImg src={topAlbum.cover_medium} alt={topAlbum.title} />

      <InfoCardContent>
        <Header2 color="#fff" weight={"bold"}>{topAlbum.title}</Header2>
        
        <InfoCardBody>
          <Header5 color="#fff">Lo mejor de {artist.name}</Header5>
          <Paragraph color="#662323">{artist.nb_fan} seguidores</Paragraph>
        </InfoCardBody>

        <Paragraph color="#fff">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis optio, asperiores consectetur molestias unde quibusdam laudantium praesentium nam vitae labore! Aspernatur architecto dolores adipisci, excepturi voluptates ratione deleniti suscipit molestiae?</Paragraph>

        <InfoCardButtons>
          <ButtonPrimary>Reproducir</ButtonPrimary>
          <ButtonSecondary>Seguir</ButtonSecondary>
        </InfoCardButtons>
      </InfoCardContent>
    </InfoCardContainer>
  )
}
