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
       <section style={{
       maxHeight:theme.heights.TopPageSection,
       overflow: "hidden"
       }}>
         <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Contactez-nous"
         }} />
       </section>
        <section className="kingSection" style={{
        marginTop:theme.margins.KingSection,
        marginBottom:0,
        marginLeft:0,
        marginRight:0,
        padding:theme.margins.KingSection,
        paddingLeft:0,
        paddingRight:0,
       }}>
        <SectionContact letGo={{}} />
       </section>
       <section className="kingSection" style={{
        marginTop:theme.margins.KingSection,
        marginBottom:theme.margins.KingSection,
        marginLeft:0,
        marginRight:0,
        padding:theme.margins.KingSection,
        paddingLeft:0,
        paddingRight:0,
        background: theme.colors.KingBleu
       }}>
        <SectionNewsLetter letGo={{}} />
       </section>
       <section className="kingSection" style={{
        marginTop:theme.margins.KingSection,
        marginBottom:theme.margins.KingSection,
        marginLeft:0,
        marginRight:0,
        padding:theme.margins.KingSection,
        paddingLeft:0,
        paddingRight:0,
       }}>
        <SectionContactMap letGo={{}} />
       </section>
      </main><br /><br />

    </div>
  )
}
