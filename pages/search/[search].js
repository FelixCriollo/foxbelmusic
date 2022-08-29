import Head from 'next/head'
import { MusicPlayer } from '../../components/musicPlayer'
import { MainSearchPage } from '../../components/mainSearchPage/mainSearchPage'
import { usePlayMusicContext } from '../../context/playMusicContext'

export default function Search() {
  const { state } = usePlayMusicContext()

  return (
    <div>
      <Head>
        <title>
          {
            state.play ? "🎵" : "Home"
          }
        </title>
      </Head>

      <main>

        <MainSearchPage />

        <MusicPlayer />
      </main>
    </div>
  )
}