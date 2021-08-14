import Head from 'next/head'
import { Container } from 'reactstrap'
import GrilleBlogLeft from '../components/molecule/GrilleBlogLeft'
import GrilleBlog from '../components/molecule/SectionApropos'
import CardMinSection from '../components/molecule/SectionCardMin'

import Slider from '../components/molecule/slider1'
import { theme } from '../theme'
import Noschiffre from "../components/molecule/Noschiffre";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Air Métrologie</title>
      </Head>
      <main className="main" >
        <Slider />
        <Noschiffre clickIconSliderRight="" clickIconSliderLeft="" />
        <GrilleBlog />
        <GrilleBlogLeft />
        <CardMinSection />
      </main>

    </div>
  )
}
