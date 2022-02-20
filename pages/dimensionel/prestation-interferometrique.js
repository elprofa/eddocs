import Head from 'next/head'
import ContentLaboratoire from '../../components/molecule/ContentLaboratoire'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import Texte from '../../components/shared/Texte'
import { theme } from '../../theme'

export default function PrestatuibInterferometrique() {

  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Nos Laboratoires</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
          <TopPageSection letGo={{
              image:"/img/slide1.jpg",
              title:"Prestation Interférométrique",
              iconGrille:2
          }} />

      <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={1} submenu={2} open={true} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
            Pour améliorer les performances de votre activité, le laboratoire dimensionnel dispose d’un interféromètre laser XL-80 de RENISHAW qui donne des niveaux incomparables de calibration et de mesures haute performance sur les systèmes de positionnement, y compris les MMT, les marbres et les machines-outils.
            Le laboratoire détient son accréditation par méthode interférométrique avec des incertitudes de mesures compétitives afin d'avoir un bon jugement de vos équipements.            
               ">
            </Texte>
            <div className='row'>
              <div className='col-lg-4'>
                <div className="text-center my-2 ">
                      <img src="/img/news/i1.jpg" className="mw-100 rounded-3" style={{maxHeight:"250px",display:"inline-block"}} />
                      <img src="/img/news/i2.jpg" className="mw-100 rounded-3" style={{maxHeight:"100px",display:"inline-block"}} />
                      <img src="/img/news/i3.jpg" className="mw-100 rounded-3" style={{maxHeight:"100px",display:"inline-block"}} />
                      <img src="/img/news/i4.jpg" className="mw-100 rounded-3" style={{maxHeight:"100px",display:"inline-block"}} />
                      <img src="/img/news/i5.jpg" className="mw-100 rounded-3" style={{maxHeight:"100px",display:"inline-block"}} />
                      <img src="/img/news/i6.jpg" className="mw-100 rounded-3" style={{maxHeight:"100px",display:"inline-block"}} />
                      
                  </div>
                  
              </div>
              
              <div className='col-lg-4'>
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                    INSTRUMENTS À CÔTES VARIABLES: 
                </h2>

                <div className='row'>
                  <div className='col-lg-8'>
                    <ul>
                      <li>Capteur de translation à affichage analogique</li>
                      <li>Capteur de translation à affichage numérique</li>
                      <li>Extensomètre</li>
                    </ul>
                  </div>
                  <div className='col-lg-4'>
                    <img src="/img/news/i8.jpg" className="mw-100 rounded-3" width="100%" />
                    
                  </div>
                </div>
                
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}} className="mt-3">
                  INSTRUMENTS À CÔTES FIXES :
                </h2>
                <div className='row'>
                  <div className='col-lg-8'>
                    <ul>
                      <li>Cales étalons à bouts plans parallèles en acier</li>
                      <li>Cales étalons à bouts plans parallèles en céramique</li>
                      <li>Etalon étagé</li>
                      <li>Cale de section non normalisée ou de cote non standard</li>
                      <li>Broches à bouts plans parallèles étalons</li>
                      <li>Broches à bouts sphériques étalons</li>
                      <li>Jeu de lames d’épaisseur</li>
                      <li>Peigne de mesure</li>
                      <li>Cales à faces plates parallèles mini/maxi</li>
                      <li>Bague cylindrique lisse</li>
                      <li>Calibre à mâchoire</li>
                      <li>Tampon et disque cylindriques lisses</li>
                      <li>Jauge plate</li>
                      <li>Pige cylindrique lisse</li>
                      <li>Sphère de métrologie</li>
                      <li>Sphère de métrologie</li>
                      <li>Tampons filetés</li>
                      <li>Bagues filetées</li>
                      <li>Master rotule</li>
                    </ul>
                  </div>
                  <div className='col-lg-4'>
                    <img src="/img/news/i9.jpg" className="mw-100 rounded-3" width="100%" />
                    
                  </div>
                </div>
                
              </div>

              <div className='col-lg-4'>
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                  INSTRUMENTS DE MESURE DE LONGUEUR : 
                </h2>
                <div className='row'>
                  <div className='col-lg-8'>
                    <ul>
                      <li>Indicateur de position</li>
                      <li>Micromètre objet</li>
                      <li>Etalon à traits</li>
                      <li>Règle graduée</li>
                      <li>Mètre à ruban</li>
                      <li>décamètre</li>
                      <li>ruban gradué ou gravé</li>
                      <li>double décamètre</li>
                    </ul>
                  </div>
                  <div className='col-lg-4'>
                    <img src="/img/news/i10.jpg" className="mw-100 rounded-3" width="100%" />
                    <img src="/img/news/i12.png" className="mw-100 rounded-3" width="100%" />
                  </div>
                </div>

                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                  INSTRUMENTS DE MESURE DE PLANÉITÉ : 
                </h2>

                <div className='row'>
                  <div className='col-lg-7'>
                    <ul>
                      <li>Marbre en granit</li>
                      <li>Marbre en verre</li>
                      <li>Marbre en fonte</li>
                    </ul>
                  </div>
                  <div className='col-lg-5'>
                    <img src="/img/news/i11.jpg" className="mw-100 rounded-3" width="100%" />
                  </div>
                </div>
                
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-1'>
                <img src="/img/tunac.png" className="mw-100 rounded-3" width="100%" />
              </div>
              <div className='col-lg-1'>
                <img src="/img/news/ilac.png" className="mw-100 rounded-3" width="100%" />
              </div>
              <div className='col-lg-10'>
                <img src="/img/news/i7.jpg" className="mw-100 rounded-3" height="150" width="100%" />
              </div>
            </div>

          </div>
        </div>
        
      </section>
       
      </main>

    </div>
  )
}
