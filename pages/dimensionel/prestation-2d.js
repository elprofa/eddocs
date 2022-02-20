import Head from 'next/head'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import Texte from '../../components/shared/Texte'
import { theme } from '../../theme'

export default function Prestation2a() {

  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Nos Laboratoires</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
          <TopPageSection letGo={{
              image:"/img/slide1.jpg",
              title:"Prestation 2D",
              iconGrille:2
          }} />

      <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={1} submenu={4} open={true} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
               Le laboratoire AIR METROLOGIE vous propose, sous accréditations TUNAC-ILAC N°2-0124 l'étalonnage des machines 2D à axe optique horizontal ou vertical :
             ">
            </Texte>
            <div className='row'>
                <div className='col-lg-9'>
                    <ul>
                    <li>Projecteur de profil</li>
                    <li>Microscope</li>
                    <li>Machine 2D</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <img src="/img/news/d1.jpg" style={{display: "inline-block",width:'100%'}} />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <Texte texte="
                Avec plusieurs types de système de mesure :
                ">
                    </Texte>
                    <ul>
                    <li>à règle de comptage en verre</li>
                    <li>à règle de comptage en acier</li>
                    <li>à butée micrométriques en </li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <img src="/img/news/d2.jpg" style={{display: "inline-block",width:'100%'}} />
                </div>
                <div className='col-lg-3'>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-3'>
                    
                </div>
                <div className='col-lg-3'>
                    <img src="/img/news/d3.jpg" style={{display: "inline-block",width:'100%'}} />
                </div>
                <div className='col-lg-3'>
                </div>
                <div className='col-lg-3'>
                </div>
            </div>

            <div className='row'>
                
                <div className='col-lg-8'>
                    <img src="/img/news/d4.jpg"  style={{display: "inline-block",maxHeight:'180px'}} />
                    <img src="/img/news/d5.jpg" style={{display: "inline-block",maxHeight:'180px'}} />
                </div>
                <div className='col-lg-2'>
                </div>
                <div className='col-lg-2'>
                </div>
            </div>
            <div className='row'>
                
                <div className='col-lg-1 align-self-center'>
                    <img src="/img/tunac.png" className="mw-100 rounded-3" width="100%" />
                </div>
                <div className='col-lg-1 align-self-center'>
                    <img src="/img/news/ilac.png" className="mw-100 rounded-3" width="100%" />
                </div>
                <div className='col-lg-2'>
                    <img src="/img/news/d7.jpg" className="mw-100 rounded-3" height="220" width="100%" />
                </div>
                <div className='col-lg-8'>
                    <img src="/img/news/d8.jpg" className="mw-100 rounded-3" height="220" width="100%" />
                </div>
            </div>
          </div>
        </div>
      </section>
       
      </main>

    </div>
  )
}
