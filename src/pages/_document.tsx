import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html className='scroll-smooth' style={{scrollBehavior:'smooth'}}> 
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
      </body>
    </Html>
  )
}