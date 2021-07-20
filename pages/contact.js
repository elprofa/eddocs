import Head from 'next/head'
import SectionContact from '../components/molecule/SectionContact'
import SectionContactMap from '../components/molecule/SectionContactMap'
import SectionNewsLetter from '../components/molecule/SectionNewsLetter'
import TopPageSection from '../components/molecule/TopPageSection'
import { theme } from '../theme'

export default function Contact() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie | Contactez-nous</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
        <TopPageSection letGo={{
            image:"/img/slide1.jpg",
            title:"Contactez-nous"
         }} />
        <SectionContact letGo={{}} />
        <SectionNewsLetter letGo={{}} />
        <SectionContactMap letGo={{}} />
      </main>

    </div>
  )
}
