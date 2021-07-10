import React from 'react'
import SideBarLaboStc from './SideBarLabo.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';

const SideBarLabo = (props) => {
    const letGo=props.letGo;
    const menus=props.letGo.menus;

    return (
        <SideBarLaboStc className="d-flex flex-column flex-shrink-0 p-3" MonStyle={letGo.style}>
           <div className="desktop">
           <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <Title letGo={{
                  texte:<span>Nos <b>Laboratoire</b> </span>,
                  style:{
                      fontWeight:"400",
                      fontSize:theme.font.headingFontSizes.h3,
                      padding:"15px",
                      paddingTop: theme.margins.KingSection,
                      paddingBottom:"0px"
                  }
              }} />
              
            </a>
            <Trait letGo={{
                style:{
                    margin:"15px",
                    marginBottom:"30px"
                }
            }} />

            <ul className="nav nav-pills flex-column mb-auto">

                {
                    menus.map((menu,index)=>
                        <li className="nav-item" key={index+"menu_laboratoire"}>
                            <a href={menu.lien} className={menu.active+" nav-link"} aria-current="page">
                            {menu.texte}
                            {
                                menu.active?<Trait letGo={{
                                    style:{width:"60%"}
                                }} />:""
                            }
                            </a>
                        </li>
                    )
                }
                
            </ul>
           </div>
           <div className="phone">
                    {
                        menus.map((menu,index)=>
                        <a href={menu.lien} key={index+"badge1"}>
                            <span class="badge bg-secondary"> {menu.texte}</span>
                        </a>
                    )
                }
           
           </div>

        </SideBarLaboStc>
       
    )
}


export default SideBarLabo
