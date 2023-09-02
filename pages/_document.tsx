import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const a = 10
  console.log(a)
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
