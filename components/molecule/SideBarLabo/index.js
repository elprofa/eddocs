import React from 'react'
import SideBarLaboStc from './SideBarLabo.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import gsap from 'gsap'
import { getElementById } from 'domutils';

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
          lien:"/laboratoires/6",
          active:"6"
        },
        {
          texte:"Pression",
          lien:"/laboratoires/7",
          active:"7"
      },
      {
        texte:"Pesage",
        lien:"/laboratoires/8",
        active:"8"
      },
      {
        texte:"Temps & Frequence",
        lien:"/laboratoires/9",
        active:"9"
      },
      {
        texte:"Anemometrie",
        lien:"/laboratoires/10",
        active:"10"
      },
      {
        texte:"Volume et Masse Volumique",
        lien:"/laboratoires/11",
        active:"11"
      },
      
      {
        texte:"Chimie",
        lien:"/laboratoires/112",
        active:"12"
      },
      {
        texte:"Machines de Forces",
        lien:"/laboratoires/13",
        active:"13"
      },
      {
        texte:"Qualification des Environnements propres",
        lien:"/laboratoires/14",
        active:"14"
      },
      {
        texte:"Qualification des Autoclaves",
        lien:"/laboratoires/15",
        active:"15"
      },
      {
        texte:"Qualification de l'air comprime",
        lien:"/laboratoires/16",
        active:"16"
      },
      {
        texte:"Caracterisation des Enceintes Climiques",
        lien:"/laboratoires/17",
        active:"17"
      }
        
      ];
    const id_page=props.id_page;

    const openLabo=()=>{
      document.getElementById('phone').style.display="block";
      gsap.from(".phone", { x: 0, duration: 1});
    }
    const closeLabo=()=>{
      
      gsap.to(".phone", { x: 0, duration: 1});
      document.getElementById('phone').style.display="none";
    }
    
    return (
        <SideBarLaboStc className="d-flex flex-column flex-shrink-0 p-3 py-0 py-md-5">
           <div className="desktop">
           <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <Title partOne="Nos" PartTwo=" Laboratoires" number={1} MyclassName="py-2 py-md-3 title" />
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
           <div className="phone" id="phone">
             <div className="menu">
               <div className="header">
               
                 <h3 onClick={closeLabo}> <AiOutlineClose/> Nos laboratoires</h3>
               </div>
               <ul>
                 <li>
                  <a>Papa et maman</a>
                 </li>
                 <li>
                  <a>Papa et maman</a>
                 </li>
                 <li>
                  <a>Papa et maman</a>
                 </li>
               </ul>
             
             </div>
             
           </div>
           {/* <button className="btn btn-primary openLabo" onClick={openLabo}>Labo</button> */}
        </SideBarLaboStc>
       
    )
}


export default SideBarLabo
