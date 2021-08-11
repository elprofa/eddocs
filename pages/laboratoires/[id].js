import Head from 'next/head'
import ContentLaboratoire from '../../components/molecule/ContentLaboratoire'
import SideBarLabo from '../../components/molecule/SideBarLabo'
import TopPageSection from '../../components/molecule/TopPageSection'
import { theme } from '../../theme'
import { useRouter } from 'next/router';


export default function IdLabo({query}) {
    const menuAsides=[
        {
            texte:"Dimensionnel",
            lien:"/laboratoires/1",
            active:"active"
        },
        {
          texte:"Electricité & Magnetisme",
          lien:"/laboratoires/2"
        },
        {
          texte:"Temperature",
          lien:"/laboratoires/3"
        },
        {
          texte:"Hydrogène",
          lien:"/laboratoires/4"
        },
        {
          texte:"Force & couple",
          lien:"/"
        },
        {
          texte:"Masse",
          lien:"/"
        },
        {
          texte:"Pression",
          lien:"/",
      },
      {
        texte:"Pesage",
        lien:"/"
      },
      {
        texte:"Temps & Frequence",
        lien:"/"
      },
      {
        texte:"Chimie",
        lien:"/"
      },
      {
        texte:"Volume et Masse Volumique",
        lien:"/"
      },
      {
        texte:"Anemometrie",
        lien:"/"
      },
      {
        texte:"Machines de Forces",
        lien:"/",
      },
      {
        texte:"Qualification des Environnements propres",
        lien:"/"
      },
      {
        texte:"Qualification des Autoclaves",
        lien:"/"
      },
      {
        texte:"Qualification de l'air comprime",
        lien:"/"
      },
      {
        texte:"Caracterisation des Enceintes Climiques",
        lien:"/"
      }
        
      ];

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
              <SideBarLabo id_page={id_page} letGo={{
              menus:menuAsides }} />
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
