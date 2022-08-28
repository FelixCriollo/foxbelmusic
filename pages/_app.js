import { GlobalStyle } from "../style-components"
import { Layout } from "../components/layout"
import { PlayMusicProvider } from "../context/playMusicContext"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <PlayMusicProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </PlayMusicProvider>
    </>
  )
}

export default MyApp
