import Head from 'next/head'
import ContentLaboratoire from '../../components/molecule/ContentLaboratoire'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import Texte from '../../components/shared/Texte'
import { theme } from '../../theme'

export default function NosLaboratoires() {

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
              <SideBarLabo id_page={1} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
            Pour améliorer les performances de votre activité, le laboratoire dimensionnel dispose d’un interféromètre laser XL-80 de RENISHAW qui donne des niveaux incomparables de calibration et de mesures haute performance sur les systèmes de positionnement, y compris les MMT, les marbres et les machines-outils.
            Le laboratoire détient son accréditation par méthode interférométrique avec des incertitudes de mesures compétitives afin d'avoir un bon jugement de vos équipements.            
               ">
            </Texte>
            <div className='row'>
              <div className='col-lg-2'>
                <div className="text-center my-2 ">
                      <img src="/img/tunac.png" className="mw-100 rounded-3" style={{maxHeight:"90px"}} />
                      <img src="/img/news/ilac.png" className="mw-100 rounded-3" style={{maxHeight:"90px"}} />
                  </div>
                  <div className="text-center my-2 my-md-4">
                      <img src="/img/news/cofrac.png" className="mw-100 rounded-3" style={{maxHeight:"90px"}} />
                      
                  </div>
                  <div className="text-center my-2 my-md-4">
                      <img src="/img/news/semac.jpg" className="mw-100 rounded-3" style={{maxHeight:"90px"}} />
                  </div>
              </div>
              
              <div className='col-lg-4'>
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                    INSTRUMENTS À CÔTES VARIABLES: 
                </h2>
                <ul>
                  <li>Capteur de translation à affichage analogique</li>
                  <li>Capteur de translation à affichage numérique</li>
                  <li>Extensomètre</li>
                </ul>

                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}} className="mt-3">
                  INSTRUMENTS À CÔTES FIXES :
                </h2>
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
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                  INSTRUMENTS DE MESURE DE LONGUEUR : 
                </h2>
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
               
                <h2 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>
                  INSTRUMENTS DE MESURE DE PLANÉITÉ : 
                </h2>

                <ul>
                  <li>Marbre en granit</li>
                  <li>Marbre en verre</li>
                  <li>Marbre en fonte</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
       
      </main>

    </div>
  )
}
