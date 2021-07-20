import React from 'react'
import SideBarLaboStc from './SideBarLabo.stc';
import Button from '../../shared/Button';
import Trait from '../../shared/Trait';
import Title from '../../shared/Title';
import { theme } from '../../../theme';

const SideBarLabo = (props) => {
    const menus=props.letGo.menus;

    return (
        <SideBarLaboStc className="d-flex flex-column flex-shrink-0 p-3">
           <div className="desktop">
           <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <Title partOne="Nos" PartTwo=" Laboratoire" number={1} MyclassName="py-2 py-md-3 title" />
            </a>
           

            <ul className="nav nav-pills flex-column mb-auto">

                {
                    menus.map((menu,index)=>
                        <li className="nav-item" key={index+"menu_laboratoire"}>
                            <a href={menu.lien} className={menu.active+" nav-link"} aria-current="page">
                                {menu.texte}
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
                            <span className="badge bg-secondary"> {menu.texte}</span>
                        </a>
                    )
                }
           
           </div>

        </SideBarLaboStc>
       
    )
}


export default SideBarLabo
