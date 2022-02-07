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
import Link from 'next/link'
import Image from 'next/image'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const MenuHeader=[
    {
        texte:"Présentation",
        altT:"Qui som...",
        chemin:"/qui-sommes-nous",
    },
    {
        texte:"Nos laboratoires",
        altT:"Nos lab...",
        chemin:"/nos-laboratoire",
    },
    {
        texte:"Nos Accréditations",
        altT:"Nos Accr...",
        chemin:"/nos-accreditations",
    },
    {
        texte:"Contactez-nous",
        altT:"Contact...",
        chemin:"/contact",
    }
]

const [souligner, setSouligner] = useState(null);
const handleMenu =(index) => {
  setSouligner(index);

}

  return (
    <HeaderStc>
      <Navbar  light expand="md">
        <Container>
        <NavbarBrand href="/" className="siteLogo"><Image src="/img/logo.png" width="150" height="50" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-auto" navbar>
              {
                  MenuHeader.map((menu,index)=><NavItem key={1+index+"menuHeader"}  onClick={() => handleMenu(index)}>
                    <Link href={menu.chemin}>
                      <a className="nav-link" >
                        <span className= {`${index === souligner ? "souligner texte" : "texte"}`}>{menu.texte} </span>
                        <span className="altT">{menu.altT}</span>
                      </a>
                    </Link>
                    </NavItem>)
              }
           
          </Nav>
          <NavbarText><Image src="/img/logol2mi.png" width="120" height="50" /></NavbarText>
        </Collapse>
        </Container>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;