import Head from 'next/head'
import GrilleApropos from '../components/molecule/GrilleApropos'
import TopPageSection from '../components/molecule/TopPageSection'
import SectionClient from '../components/molecule/SectionClient'
import { theme } from '../theme'

export default function QuiSommesNous() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie | Qui sommes-nous ?</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       <section style={{
       maxHeight:theme.heights.TopPageSection,
       overflow: "hidden"
       }}>
         <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Qui sommes-nous ?"
         }} />
       </section>
       <section style={{margin:theme.margins.KingSection,
       marginLeft:0,
       marginRight:0,
       padding:theme.margins.KingSection,
       paddingLeft:0,
       paddingRight:0,
       }}>
         <div className="container">
           <GrilleApropos letGo={{}} />
         </div>
       </section>
       <section style={{margin:theme.margins.KingSection,
       marginLeft:0,
       marginRight:0,
       padding:theme.margins.KingSection,
       paddingLeft:0,
       paddingRight:0,
       background: theme.colors.kingGreen
       }}>
         <div className="container">
           <SectionClient />
         </div>
       </section>
      </main><br /><br />

    </div>
  )
}
