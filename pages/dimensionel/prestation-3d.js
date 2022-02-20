import Head from 'next/head'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import Texte from '../../components/shared/Texte'
import { theme } from '../../theme'

export default function Prestation3a() {

  return (
    <div className="App">
      <Head>
        <title>Air Métrologie | Nos Laboratoires</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
          <TopPageSection letGo={{
              image:"/img/slide1.jpg",
              title:"Prestation 3D",
              iconGrille:2
          }} />

      <section >
        <div className="row">
          <div  className="col-lg-3 col-md-3">
              <SideBarLabo id_page={1} submenu={5} open={true} />
          </div>
          <div className="col-lg-9 col-md-9 pt-5">
              
            <Texte texte="
               Le laboratoire AIR METROLOGIE vous propose, sous accréditations TUNAC-ILAC  N° 2-0124,  l'étalonnage de plusieurs machines tridimensionnelles selon ISO 10 360.
               Parmi les premiers laboratoires accrédités pour ses interventions sur sites client, Quelle que soit votre zone géographique nationale ou internationale. 
               Nos techniciens qualifiés vous offrent leurs expertise et assistance technique en toute transparence et objectivité.
             ">
            </Texte>
            <Texte texte="Les machines tridimensionnelles concernées pour ces nouvelles accréditations sont : " />
            <div className='row'>
                <div className='col-lg-9'>
                    <ul>
                    <li>Machine à mesurer tridimensionnelle (MMT) utilisant tout type de système de palpage à contact fonctionnant en 
                        mode de palpage discret NF EN ISO 10360-2 (01/2010).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) utilisées en mode de mesure par scanning NF EN ISO 10360-4 (08/2000).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) ayant l’axe de rotation d’un plateau tournant comme 4ème axe NF EN ISO 10360-3 (08/2000).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) équipées de systèmes de palpage imageurs NF EN ISO 10360-7 (08/2011).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) avec détecteurs optiques sans contact NF EN ISO 10360-8 (02/2014).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) avec systèmes de palpage multiples NF EN ISO 10360-9 (02/2014)..</li>
                    <li>Système à mesurer tridimensionnelle (SMT) Laser de poursuite pour mesurer les distances de point à point NF EN ISO 10360-10 (07/2016).</li>
                    <li>Système à mesurer tridimensionnelle (SMT) Machines à mesurer tridimensionnelles à bras articulés (MMT) NF EN ISO 10360-12 (12/2016).</li>
                    <li>Machine à mesurer tridimensionnelle (MMT) utilisant des systèmes de palpage à stylets multiples NF EN ISO 10360-5 (03/2001).</li>
                    </ul>
                </div>
                <div className='col-lg-3'>
                    <img src="/img/news/3d1.jpg" style={{display: "inline-block",width:'100%'}} />
                    <img src="/img/news/3d2.jpg" style={{display: "inline-block",width:'100%'}} />
                    <img src="/img/news/3d3.jpg" style={{display: "inline-block",width:'100%'}} />
                </div>
            </div>
          </div>
        </div>
      </section>
       
      </main>

    </div>
  )
}
