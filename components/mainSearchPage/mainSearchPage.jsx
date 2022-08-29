import { ArtistContainer, CardContainer, Header2, Paragraph } from '../../style-components'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { CardItem } from '../card/cardItem';
import { CardArtist } from '../card/cardArtist';

export function MainSearchPage() {
  const [search, setSearch] = useState({})
  const [loading, setLoading] = useState(true)

  const router = useRouter()
  const query = router.query.search

  useEffect(() => {
    const SearchedAPI = async () => {
      const res = await fetch(`http://localhost:4000/api/search/${query}`);
      const data = await res.json()
      setLoading(false)
      setSearch(data)
    }

    SearchedAPI()
  }, [query])

  
  if(loading) {
    return <p>loading...</p>
  } else {
    const { tracks, artists } = search
    console.log(artists.data);
    return (
      <>
        {
          artists.data.length
           ?
            (
            <>
              <Header2 weight="bold" color='#E86060'>Artist</Header2>

              <ArtistContainer>
                {
                  artists.data.map(artist => (
                    <li key={artist.id}>
                      <CardArtist 
                        picture={artist.picture_medium} 
                        fans={`Fans ${artist.nb_fan}`} 
                        {...artist} 
                      />
                    </li>
                  ))
                }
              </ArtistContainer>
            </>
            )
           : null
        }
  
        {
          tracks.data.length 
            ?
              (
              <>
                <Header2 weight="bold" color='#E86060'>Tracks</Header2>
                <CardContainer>
                  {
                    
                    (tracks.data.map(track => (
                    <li key={track.id}>
                      <CardItem 
                        img={track.album.cover_medium}
                        name={track.artist.name}
                        {...track} 
                      />
                    </li>
                    )))
                  }
                      
                </CardContainer>  
              </>
              )
            : <Paragraph>No found</Paragraph>
        }
      </>
    )
  }  
}
