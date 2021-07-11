import Head from 'next/head'
import TopPageSection from '../components/molecule/TopPageSection'
import { theme } from '../theme'
import AccreditationSection from '../components/molecule/AcreditationSection'

export default function NosAccreditation() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie | Nos Accreditations</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       <section style={{
       maxHeight:theme.heights.TopPageSection,
       overflow: "hidden"
       }}>
         <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Nos accréditations"
         }} />
       </section>
       <section className="kingSection sectionHeader">
         <div className="container">
           <AccreditationSection letGo={{}} />
         </div>
       </section>
      
      </main><br /><br />

    </div>
  )
}
