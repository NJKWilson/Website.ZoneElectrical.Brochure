import Head from 'next/head'
import Accreditations from '../components/landingPage/accreditations'
import Hero from '../components/landingPage/hero'
import OurCustomers from '../components/landingPage/ourcustomers'
import OurServices from '../components/landingPage/ourservices'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zone Electrical Ltd.</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Hero />
      <OurServices />
      <Accreditations />
      <OurCustomers />
    </div>
  )
}