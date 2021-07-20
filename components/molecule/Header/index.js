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
        texte:"Qui sommes-nous?",
        altT:"Qui somm...",
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
        chemin:"/nos-accreditations",
    },
    {
        texte:"Contactez-nous",
        altT:"Contact...",
        chemin:"/contact",
    }
]


  return (
    <HeaderStc>
      <Navbar  light expand="md">
        <Container>
        <NavbarBrand href="/" className="siteLogo"><Image src="/img/lo.png" width="150" height="50" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto ml-auto" navbar>
              {
                  MenuHeader.map((menu,index)=><NavItem key={1+index+"menuHeader"}>
                    <Link href={menu.chemin}>
                      <a className="nav-link" >
                        <span className="texte">{menu.texte} </span>
                        <span className="altT">{menu.altT}</span>
                      </a>
                    </Link>
                    </NavItem>)
              }
           
          </Nav>
         
        </Collapse>
        <NavbarText><Image src="/img/go.png" width="150" height="50" /></NavbarText>
        </Container>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;