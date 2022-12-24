import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Value Ladder" key="title"/>
        <meta property="og:description" content="Create an AI generated value ladder and filter out your dream customer" key="description"/>
        <meta
          property="og:image"
          content="https://upcdn.io/12a1xuW/raw/Twitter%20post%20-%202-5o2N.png"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
