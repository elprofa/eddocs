import Head from 'next/head'
import { Container } from 'reactstrap'
import GrilleBlogLeft from '../components/molecule/GrilleBlogLeft'
import GrilleBlog from '../components/molecule/SectionApropos'
import CardMinSection from '../components/molecule/SectionCardMin'

import Slider from '../components/molecule/Slider'
import { theme } from '../theme'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <main className="main" >
        <Slider />
        <GrilleBlog />
        <GrilleBlogLeft />
        <CardMinSection />
      </main>

    </div>
  )
}
