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
              title:"Prestation mécanique",
              iconGrille:2
          }} />

      <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={1} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
              Le laboratoire AIR METROLOGIE vous propose, sous accréditations COFRAC N° 2-1920, TUNAC N°2-0124 et SEMAC N° AL/29/2008, l'étalonnage de plusieurs équipements dimensionnels
              Parmi les premiers laboratoires accrédités pour ses interventions sur sites client, Quelle que soit votre zone géographique nationale ou internationale, les techniciens et ingénieurs du groupe réalisent sur vos sites des prestations couvrant une large gamme de besoins.
              11 techniciens itinérants pour des interventions réactives et simultanées afin de développer et mettre en œuvre toutes méthodes adéquates aux exigences communiquées.  
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
                   INSTRUMENTS À CÔTES VARIABLES : 
                </h2>
                <ul>
                  <li>Pied à coulisse</li>
                  <li>Micromètre d’extérieur standard</li>
                  <li>Micromètre d’extérieur à touches mixtes</li>
                  <li>Micromètre pour mesurage des parois de tubes</li>
                  <li>Micromètre d'extérieur (spéciales)</li>
                  <li>Micromètre d'extérieur (spéciales)
                    <ul>
                      <li> à vis</li>
                      <li> à touches fixes fines,</li>
                      <li> à touches fixes sphériques</li>
                      <li> à touches fixes effilées,</li>
                      <li> à touches interchangeables planes, sphériques et fines</li>
                      <li> à rallonges interchangeables,</li>
                      <li> à étrier profond</li>
                      <li> à touche fixe en vé</li>
                    </ul>
                  </li>
                  <li>	Micromètre d'extérieur à vis à rallonges interchangeables</li>
                  <li>	Micromètre d'extérieur à vis à touches à plateau</li>
                  <li>	Micromètre pour mesurage de fils</li>
                  <li>	Micromètre d’extérieur à vis à comparateur intégré</li>
                  <li>  Micromètre d’extérieur à vis à comparateur rapporté</li>
                  <li>	Micromètre d’intérieur à 2 touches dit « jauge micrométrique »</li>
                  <li>	Micromètre d'extérieur à vis à filetage d’extérieur</li>
                  <li>	Micromètre à balayage laser</li>
                  <li>	Colonne de mesure</li>
                  <li>	Capteur de translation à affichage analogique</li>
                  <li>	Capteur de translation à affichage numérique</li>
                  <li>	Capteur de translation à affichage numérique</li>
                  <li>	Trusquin</li>
                  <li>	Butée micrométrique</li>
                  <li>	Comparateur à cadran</li>
                  <li>	Comparateur à affichage numérique à tige rentrante radiale</li>
                  <li>	Comparateur à levier</li>
                  <li>	Mesureur d'alésage</li>
                  <li>	Micromètre pour mesurage de fils</li>
                  <li>	Mesureur d'épaisseur</li>
                  <li>	Extensomètre</li>
                </ul>
              </div>
              <div className='col-lg-3'>
                <h3 style={{color:'#0d77b6',fontSize:"18px",fontWeight:"bold"}}>INSTRUMENTS À CÔTES FIXES :</h3>
                <ul>
                  <li>Cales étalons à bouts plans parallèles en acier</li>
                  <li>Cales étalons à bouts plans parallèles en céramique</li>
                  <li>Cales étalons à bouts plans parallèles en carbure de tungstène</li>
                  <li>Calibre à mâchoire</li>
                  <li>Tampon et disque cylindriques lisses</li>
                  <li>Jauge plate</li>
                  <li>Tampons filetés</li>
                  <li>Bagues filetées</li>
                  <li>	Cannelures cylindriques droites à flancs en développante</li>
                  <li>Cannelures cylindriques à flancs parallèles, à centrage intérieur</li>
                  <li>Tamis de contrôle en tissus métalliques</li>
                  <li>Tamis de contrôle en tôles métalliques perforées</li>
                  <li>Grille en fonte (Tamis à barres) </li>
                </ul>
                <img src="/img/news/10.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/11.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/12.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/13.png" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/14.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/15.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
              </div>
              <div className='col-lg-3'>
                <img src="/img/news/1.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/2.jpg" style={{display: "inline-block",maxHeight:'250px'}} />
                <img src="/img/news/3.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/4.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/5.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/6.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/7.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/8.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/9.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
                <img src="/img/news/16.jpg" width="120" style={{display: "inline-block",maxHeight:'120px'}} />
              </div>
            </div>

          </div>
        </div>
      </section>
       
      </main>

    </div>
  )
}
