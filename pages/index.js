import Head from 'next/head'
import GrilleBlog from '../components/molecule/GrilleBlog'
import GrilleBlogLeft from '../components/molecule/GrilleBlogLeft'
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

      <main className="main" style={{minHeight:"100vh"}}>
       <Slider />
       <section className="kingSection sectionHeader"  style={{margin:theme.margins.KingSection,
       marginLeft:0,
       marginRight:0,
       padding:theme.margins.KingSection,
       paddingLeft:0,
       paddingRight:0,
       background: theme.colors.kingGreen
       }}>
         <div className="container">
           <GrilleBlog letGo={{}} />
         </div>
       </section>
       <section  style={{margin:theme.margins.KingSection,
       marginLeft:0,
       marginRight:0,
       padding:theme.margins.KingSection,
       paddingLeft:0,
       paddingRight:0,
       }}>
         <div className="container">
           <GrilleBlogLeft letGo={{}} />
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
           <CardMinSection letGo={{}} />
         </div>
       </section>
      </main>

    </div>
  )
}
