import Head from 'next/head'
import { MusicPlayer } from '../../components/musicPlayer'
import { MainSearchPage } from '../../components/mainSearchPage/mainSearchPage'

export default function Search() {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>

      <main>

        <MainSearchPage />

        <MusicPlayer />
      </main>
    </div>
  )
}