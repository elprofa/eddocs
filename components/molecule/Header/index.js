import React, { useState } from 'react';
import HeaderStc from './Header.stc'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import Image from '../../shared/Image'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


  const MenuHeader=[
    {
        texte:"Qui sommes-nous?",
        altT:"Qui som...",
        chemin:"/qui-sommes-nous",
    },
    {
        texte:"Nos laboratoires",
        altT:"Nos lab...",
        chemin:"nos-laboratoire",
    },
    {
        texte:"Nos Accreditations",
        altT:"Nos Accr...",
        chemin:"/",
    },
    {
        texte:"Contactez-nous",
        altT:"Contact...",
        chemin:"/",
    }
]


  return (
    <HeaderStc>
      <Navbar  light expand="md">
        <Container>
        <NavbarBrand href="/" className="siteLogo"><Image letGo={{src:"/img/lo.png"}} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-auto" navbar>
              {
                  MenuHeader.map((menu,index)=><NavItem key={1+index+"menuHeader"}><NavLink href={menu.chemin}><span className="texte">{menu.texte} </span><span className="altT">{menu.altT}</span></NavLink></NavItem>)
              }
           
          </Nav>
          <NavbarText><Image letGo={{src:"/img/go.png"}} /></NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;