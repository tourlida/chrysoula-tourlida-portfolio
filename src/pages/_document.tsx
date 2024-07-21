import { Html, Head, Main, NextScript } from 'next/document';
import { useRouter } from 'next/router';

export default function Document() {

  return (
    <Html lang="el" className='scroll-smooth' style={{scrollBehavior: 'smooth'}}>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
      </body>
    </Html>
  )
}