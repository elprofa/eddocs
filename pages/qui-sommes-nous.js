import Head from 'next/head'
import GrilleApropos from '../components/molecule/GrilleApropos'
import TopPageSection from '../components/molecule/TopPageSection'
import SectionClient from '../components/molecule/SectionClient'
import { theme } from '../theme'

export default function QuiSommesNous() {
  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Qui sommes-nous ?</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
        <TopPageSection letGo={{
             image:"/img/quisommesnous/AA1.PNG",
             title:"Qui sommes-nous ?",
             iconGrille:1,
         }} />
       <GrilleApropos />
       <SectionClient />
      </main>   

    </div>
  )
}
