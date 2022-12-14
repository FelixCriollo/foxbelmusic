import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {    
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}