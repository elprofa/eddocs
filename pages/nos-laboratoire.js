import Head from 'next/head'
import ContentLaboratoire from '../components/molecule/ContentLaboratoire'
import SideBarLabo from '../components/molecule/SideBarLabo'
import TopPageSection from '../components/molecule/TopPageSection'
import { theme } from '../theme'

export default function NosLaboratoires() {

  const menuAsides=[
    {
        texte:"Dimensionnel",
        lien:"/",
        active:"active"
    },
    {
      texte:"Dimensionnel",
      lien:"/"
    },
    {
      texte:"Dimensionnel",
      lien:"/"
    },
    {
      texte:"Dimensionnel",
      lien:"/"
    },
    {
      texte:"Dimensionnel",
      lien:"/"
    },
    {
      texte:"Dimensionnel",
      lien:"/"
    },
    {
      texte:"Dimensionnel",
      lien:"/",
  },
  {
    texte:"Dimensionnel",
    lien:"/"
  },
  {
    texte:"Dimensionnel",
    lien:"/"
  },
  {
    texte:"Dimensionnel",
    lien:"/"
  },
  {
    texte:"Dimensionnel",
    lien:"/"
  },
  {
    texte:"Dimensionnel",
    lien:"/"
  },
  {
    texte:"Dimensionnel",
    lien:"/",
},
{
  texte:"Dimensionnel",
  lien:"/"
},
{
  texte:"Dimensionnel",
  lien:"/"
},
{
  texte:"Dimensionnel",
  lien:"/"
},
{
  texte:"Dimensionnel",
  lien:"/"
},
{
  texte:"Dimensionnel",
  lien:"/"
},
    
  ]

  return (
    <div className="App">
      <Head>
        <title>Métrologie | Nos Laboratoire</title>
      </Head>

      <main className="main" style={{minHeight:"100vh"}}>
       <section style={{
       maxHeight:theme.heights.TopPageSection,
       overflow: "hidden"
       }}>
         <TopPageSection letGo={{
             image:"/img/slide1.jpg",
             title:"Nos laboratoires ?"
         }} />
       </section>
       <section className="sectionLab">
          <SideBarLabo letGo={{
            menus:menuAsides,
            style:{
              backgroundColor:theme.colors.kingGreen,
              width:"30%",
              padding: "0px !important",
              top:"-250px",
              position:"relative"
            }
          }} />
          <ContentLaboratoire letGo={{
            style:{width:"70%"}
          }} />
       </section>
       
      </main>

    </div>
  )
}
