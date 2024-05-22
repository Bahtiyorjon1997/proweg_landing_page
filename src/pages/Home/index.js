import React from 'react'
// import styles from './styles.scss'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
