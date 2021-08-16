import React, { useEffect } from 'react'
import GrilleBlogStc from './GrilleBlog.stc';
import IconGrille from '../IconGrille';
import Title from '../../shared/Title';
import Texte from '../../shared/Texte';
import { Col, Container, Row } from 'reactstrap';
import Image from 'next/image';
import {gsap} from 'gsap'
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {CSSRulePlugin} from "gsap/dist/CSSRulePlugin"

const GrilleBlog = () => {

    const animate=(e)=>{
        var text = document.getElementsByClassName('ws');
        var newDom = '';
        var animationDelay = 6;
         const w=text[0]?.innerText.length;
        console.log(text[0].innerText.length)
        for(let i = 0; i < w; i++)
        {
            newDom += '<span class="char">' + (text[0].innerText[i] == ' ' ? '&nbsp;' : text[0].innerText[i])+ '</span>';
        }
      
        text[0].innerHTML = newDom;
        var length = text[0].children.length;
      
        for(let i = 0; i < length; i++)
        {
            text[0].children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }
      }

    useEffect(() => {
    
    gsap.from(".ws",{
        scrollTrigger:{
        trigger: ".ws",
        markers:false,
        start:"top bottom",
        toggleActions:'restart none none none',
        onEnter:animate
        },
    }
    );
    gsap.from(".iconGrille",{
        scrollTrigger:{
        trigger: ".iconGrille",
        markers:false,
        start:"top bottom",
        toggleActions:'restart none none none',
        onEnter:animate
        },
        x:500,
        duration:3,
        opacity:0
    }
    );

    gsap.from(".img-container img",{
        scrollTrigger:{
        trigger: ".img-container img",
        markers:false,
        start:"top bottom",
        toggleActions:'restart none none none',
        },
        duration: 2,
        scale: 1.4,
        opacity:0
    }
    );
    }, []);


    return (
        <GrilleBlogStc className="py-0 py-md-5">
            
            <Container>
                <Row className="py-2 py-md-5 my-0">
                    <Col lg={6} className="align-self-center left">
                        <div className="text-center py-2 py-md-3 px-0 px-md-5 "> 
                            <Title partOne="A propos d'" PartTwo="Air metrologie" MyclassName="title "  number={1} />
                        </div>
                        <Texte MyclassName="py-2 py-md-3 px-0 px-md-5 paragraphe ws"  texte={
                            <>
                                Entant que spécialiste des services de métrologie, notre raison d'être est de contribuer
                                 à l'optimisation de la performance industrielle de nos differents clients par le biais 
                                 de l'amelioration industrielle de nos differents clients par le biais de l'amelioration 
                                 de de leurs processus de mesures.<br/>Nous sommes parmi les leaders à garantir une 
                                 offres multiservice d'etalonnage et verification des instruments de mesures en toute 
                                 independance, avec nos 19 accreditations notre groupe se positionne au sommet 
                                 des laboratoires à l'echelle nationale en matiere de diversifications des domaines
                                  avec une superficie de 1600 m2 couverte, employant aujourd'hui plus de 60 personnes 
                                  dans 16 laboratoires principaux qui assurent une couverture homogène de l'ensemble 
                                  du besoin national.<br/>
                                  Au delà des prestations techniques, nous apportons à nos clients 
                                  notre expertise dans le deploiement de solutions personnalisées de gestion de parc métrologique.
                            </>
                        } />

                    </Col>
                    <Col lg={6} className="text-center align-self-center right">
                        
                        <figure className="img-container">
                        <Image src="/img/blog1.png" width="1200" height="800" />
                        </figure>
                    </Col>
                </Row>
                <IconGrille position={1}/>
            </Container>
        </GrilleBlogStc>
       
    )
}


export default GrilleBlog
