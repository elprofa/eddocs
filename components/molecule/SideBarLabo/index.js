import React from 'react'
import SideBarLaboStc from './SideBarLabo.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';
import Link from 'next/link'

const SideBarLabo = (props) => {
    const menus=[
        {
            texte:"Dimensionnel",
            lien:"/laboratoires/1",
            active:"1"
        },
        {
          texte:"Electricité & Magnetisme",
          lien:"/laboratoires/2",
          active:"2"
        },
        {
          texte:"Temperature",
          lien:"/laboratoires/3",
          active:"3"
        },
        {
          texte:"Hydrogène",
          lien:"/laboratoires/4",
          active:"4"
        },
        {
          texte:"Force & couple",
          lien:"/laboratoires/5",
          active:"5"
        },
        {
          texte:"Masse",
          lien:"/",
          active:"6"
        },
        {
          texte:"Pression",
          lien:"/",
          active:"7"
      },
      {
        texte:"Pesage",
        lien:"/",
        active:"8"
      },
      {
        texte:"Temps & Frequence",
        lien:"/",
        active:"9"
      },
      {
        texte:"Chimie",
        lien:"/",
        active:"10"
      },
      {
        texte:"Volume et Masse Volumique",
        lien:"/",
        active:"11"
      },
      {
        texte:"Anemometrie",
        lien:"/",
        active:"12"
      },
      {
        texte:"Machines de Forces",
        lien:"/",
        active:"13"
      },
      {
        texte:"Qualification des Environnements propres",
        lien:"/",
        active:"14"
      },
      {
        texte:"Qualification des Autoclaves",
        lien:"/",
        active:"15"
      },
      {
        texte:"Qualification de l'air comprime",
        lien:"/",
        active:"16"
      },
      {
        texte:"Caracterisation des Enceintes Climiques",
        lien:"/",
        active:"17"
      }
        
      ];
    const id_page=props.id_page;
    
    return (
        <SideBarLaboStc className="d-flex flex-column flex-shrink-0 p-3 py-0 py-md-5">
           <div className="desktop">
           <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <Title partOne="Nos" PartTwo=" Laboratoire" number={1} MyclassName="py-2 py-md-3 title" />
            </a>
           

            <ul className="nav nav-pills flex-column mb-auto">

                {
                    menus.map((menu,index)=>
                        <li className="nav-item" key={index+"menu_laboratoire"}>
                            <Link href={menu.lien}>
                                <a className={menu.active==id_page?"active nav-link":'nav-link'} aria-current="page">
                                    {menu.texte}
                                </a>
                            </Link>
                        </li>
                    )
                }
                
            </ul>
           </div>
           <div className="phone">
                    {
                        menus.map((menu,index)=>
                        <a href={menu.lien} key={index+"badge1"}>
                            <span className="badge bg-secondary"> {menu.texte}</span>
                        </a>
                    )
                }
           
           </div>

        </SideBarLaboStc>
       
    )
}


export default SideBarLabo
