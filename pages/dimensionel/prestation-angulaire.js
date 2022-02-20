import Head from 'next/head'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import Texte from '../../components/shared/Texte'
import { theme } from '../../theme'

export default function PrestationAngulaire() {

  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Nos Laboratoires</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
          <TopPageSection letGo={{
              image:"/img/slide1.jpg",
              title:"Prestation angulaire",
              iconGrille:2
          }} />

      <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={1} submenu={3} open={true} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
                Le laboratoire dimensionnel est accrédité TUNAC-ILAC pour les mesures angulaires, pour les équipements cités ci-dessous :
             ">
            </Texte>
            <div className='row'>
              <div className='col-lg-4'>
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                INSTRUMENTS DE MESURE ANGULAIRE: 
                </h2>
                <ul>
                  <li>Réticule angulaire</li>
                  <li>Jauges d'angles</li>
                  <li>Jauges de filetages</li>
                  <li>Cales d'angle</li>
                  <li>Rapporteur d'angle</li>
                  <li>Equerre Simple</li>
                  <li>Equerre à chapeau</li>
                  <li>Equerre à talon </li>
                  <li>	Equerre à biseau</li>
                  <li>	Clinomètre</li>
                  <li>  Inclinomètre</li>
                  <li>	Niveau électronique</li>
                  <li>	Niveau à bulle</li>
                  <li>	Micromètre à balayage laser</li>
                  <li>	Colonne de mesure</li>
                  <li>	Niveau à cadre</li>
                </ul>
              </div>
              
              <div className='col-lg-8'>
                <img src="/img/news/a1.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a2.jpg" style={{display: "inline-block",maxHeight:'250px'}} />
                <img src="/img/news/a3.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a4.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a5.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a6.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a7.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a8.png" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a9.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/a10.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-2'>
                </div>
                <div className='col-lg-1 align-self-center'>
                    <img src="/img/tunac.png" className="mw-100 rounded-3" width="100%" />
                </div>
                <div className='col-lg-1 align-self-center'>
                    <img src="/img/news/ilac.png" className="mw-100 rounded-3" width="100%" />
                </div>
                <div className='col-lg-8'>
                    <img src="/img/news/a10.jpg" className="mw-100 rounded-3" height="250" width="100%" />
                </div>
            </div>
          </div>
        </div>
      </section>
       
      </main>

    </div>
  )
}
