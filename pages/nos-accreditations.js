import Head from 'next/head'
import TopPageSection from '../components/molecule/TopPageSection'
import { theme } from '../theme'
import AccreditationSection from '../components/molecule/AcreditationSection'
import SectionAutreDomaine from '../components/molecule/sectionAutreDomaine'

export default function NosAccreditation() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie | Nos Accreditations</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>

        <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Nos accréditations",
             iconGrille:1
         }} />

          <AccreditationSection />
          <SectionAutreDomaine />
      </main>

    </div>
  )
}
