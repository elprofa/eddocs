import Head from 'next/head'
import TopPageSection from '../components/molecule/TopPageSection'
import { theme } from '../theme'

export default function NosLaboratoires() {
  return (
    <div className="App">
      <Head>
        <title>Métrologie | Nos Laboratoire</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       <section style={{
       maxHeight:theme.heights.TopPageSection,
       overflow: "hidden"
       }}>
         <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Nos laboratoires ?"
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
           
         </div>
       </section>
       
      </main>

    </div>
  )
}
