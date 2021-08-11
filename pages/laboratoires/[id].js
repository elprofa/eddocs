import Head from 'next/head'
import ContentLaboratoire from '../../components/molecule/ContentLaboratoire'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import { theme } from '../../theme'
import { useRouter } from 'next/router';


export default function IdLabo({query}) {

      const id_page=query?.id?query.id:"";

  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Détail Laboratoires</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
        <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Nos laboratoires ",
             iconGrille:1,
         }} />
       
       <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={id_page} />
          </div>
          <div className="col-lg-9 col-md-9">
              <ContentLaboratoire id_page={id_page} />
          </div>
        </div>
       </section>
      </main>   

    </div>
  )
}
