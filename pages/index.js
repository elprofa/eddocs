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
      <main className="main" >
       <Slider />
        <section className="kingSection sectionHeader ml-0 mr-0 mt-60 mb-60 pt-60 pb-60"  style={{
       background: theme.colors.kingGreen
       }}>
         <div className="container">
           <GrilleBlog letGo={{}} />
         </div>
       </section>
       <section>
         <div className="container">
           <GrilleBlogLeft letGo={{}} />
         </div>
       </section>
       <section>
         <div className="container">
           <CardMinSection letGo={{}} />
         </div>
       </section>
      </main>

    </div>
  )
}
