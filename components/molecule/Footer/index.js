import React from 'react';
import Trait from '../../shared/Trait';
import FooterStc from './Footer.stc'
import {Container} from 'reactstrap'
import Image from '../../shared/Image';
import Texte from '../../shared/Texte';
import Title from '../../shared/Title';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import {theme} from '../../../theme'
import Link from '../../shared/Link';
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterSquare} from "react-icons/ai";

const Footer = (props) => {

    const texteCol1=<span>
    Le lorem ipsum est, en imprimerie, 
    une suite de mots sans signification 
    utilisée à titre provisoire pour calibrer une mise en page, 
    le texte définitif venant remplacer le faux-texte dès qu'il est prêt 
    ou que la mise en page est achevée. Généralement, on utilise un texte en 
    faux latin, le Lorem ipsum ou Lipsum.
    </span>;

    const letGo={
        texte:texteCol1,
        style:{
            letterSpacing:'0px !important',
            
            color:theme.colors.white,
            fontWeight:theme.Poid.paragraphe,
            fontFamily:theme.font.headingFont,
        }
    }

    const MenuFooter=[
        {
            style:{
                color:theme.colors.white,
            },
            texte:"A propos de Air metrologie",
            chemin:"/",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Nos laboratoires",
            chemin:"/",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Nos Accreditations",
            chemin:"/",
        },
        {
            style:{
                color:theme.colors.white,
            },
            texte:"Contact",
            chemin:"/",
        }
    ]

    const lientSociaux=[
        {
            style:{

            },
            texte:<span><AiFillFacebook /> Facebook</span>,
            chemin:"/",
        },
        {
            style:{

            },
            texte:<span><AiFillTwitterSquare /> Twitter</span>,
            chemin:"/",
        }
        ,
        {
            style:{

            },
            texte:<span><AiFillLinkedin /> Linkedin</span>,
            chemin:"/",
        }
    ];

    const TraitStc={
       
        style:{
            marginTop:theme.margins.KingParagraphe,
            marginBottom:theme.margins.KingParagraphe,
        }
    }
  return (
    <FooterStc>
        <Container  >
            
                <div className="row rowLogo">
                    <div className="col-lg-12">
                        <Trait letGo={TraitStc}/>
                        <Image letGo={{src:"/img/lo.png"}}/>
                    </div>
                </div>
               <div className="row rowLastFooter">
                   <div className="col-sm-4">
                    <Texte letGo={letGo}></Texte>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="ulSocialNet">
                                {
                                    lientSociaux.map((social,index)=><li key={index}><Link letGo={social}  /></li>)
                                }
                                
                            </ul>
                        </div>
                    </div>
                   </div>
                   <div className="col-sm-4">
                        <ul className="ulMenuFooter">

                            {
                                MenuFooter.map((menu,index)=><li key={1+index+"menuFooter"}><Link letGo={menu} /></li>)
                            }
                                    
                        </ul>
                   </div>
                   <div className="col-sm-4">
                        <Title letGo={{
                             texte:<span>Abonnez vous à <b>notre newsletter </b></span>,
                             style:{
                                color: "#fff",
                                fontSize: "23px",
                                fontWeight: 100,
                             }
                        }} />
                        <Input letGo={{
                            style:{
                                
                                marginTop:theme.margins.KingParagraphe
                            },
                            placeholder:"email@email.com",


                        }} />
                        <Button letGo={{
                            texte:"Soumettre",
                            style:{
                                backgroundImage: "linear-gradient(to right, rgb(101 143 222) , rgb(195 65 95))",
                                fontSize:theme.font.p,
                                border:0
                            }
                        }} />
                   </div>
                   <div className="col-lg-12">
                   <Trait letGo={TraitStc}/>
                   </div>
               </div>
           
        </Container>
    </FooterStc>
  );
}

export default Footer;