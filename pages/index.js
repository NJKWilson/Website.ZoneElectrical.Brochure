import Head from 'next/head'
import Accreditations from './components/accreditations'
import Footer from './components/footer'
import Hero from './components/hero'
import Stats from './components/stats'
import TopBar from './components/topbar'

export default function Home() {
  return (
    <div>
      <TopBar></TopBar>
      <Hero></Hero>
      <Stats></Stats>
      <Accreditations></Accreditations>
      <Footer></Footer>
    </div>
  )
}
