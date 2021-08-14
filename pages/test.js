import Head from 'next/head'
import GrilleApropos from '../components/molecule/GrilleApropos'
import TopPageSection from '../components/molecule/TopPageSection'
import SectionClient from '../components/molecule/SectionClient'
import { theme } from '../theme'
import Slider from '../components/molecule/slider1'

export default function QuiSommesNous() {
  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Qui sommes-nous ?</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
        <Slider />
      </main>   

    </div>
  )
}
