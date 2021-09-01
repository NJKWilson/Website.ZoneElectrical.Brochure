import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Layout from './layout'
import { AppProps } from 'next/app'

library.add(fab, faCoffee)

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
