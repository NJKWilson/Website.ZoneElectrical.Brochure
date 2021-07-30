import Head from 'next/head'
import Accreditations from '../components/accreditations'
import Footer from '../components/footer'
import Hero from '../components/hero'
import OurCustomers from '../components/ourcustomers'
import OurServices from '../components/ourservices'
import Stats from '../components/stats'
import TopBar from '../components/topbar'

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Accreditations></Accreditations>
      <Stats></Stats>
      <OurCustomers></OurCustomers>
      <OurServices></OurServices>
    </div>
  )
}
