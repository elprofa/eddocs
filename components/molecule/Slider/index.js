import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Title from "../../shared/Title";
// import Bouton from "../Bouton/Bouton";
import Image from "../../shared/Image";
import Link from '../../shared/Link';
import SliderStc from './slider.stc.js'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Noschiffre from "../Noschiffre";

const items = [
  {
    src: "/img/slide1.jpg",
    titre:"La solution pour envoyer l'argent à l'etranger",
    altText: "Slide 10",
    caption: "Et si l’argent n’avait plus de frontière? Avec XPATSA Transférez de l'argent à l'international avec "+
    " une rapidité,sécurité et efficacité impressionnante.Jamais il n'a été aussi simple "+"d'envoyer de l'argent. "+
    "Alors Pensez à votre famille, vos amis et vos proches en leur faisant un geste avec nos services de transfert.",
    lien:"transfert",
    bouton:"SIMULER VOTRE TRANSFERT ICI"
  },
  {
    src: "/img/slide2.jpg",
    altText: "Slide 2",
    titre:"Nous aidons et accompagnons les étudiants",
    caption: "XPATSA, aide et accompagne les étudiants dans les démarches administratives pour les études a l’etranger "+
    "(Maroc).Confiez-nous votre dossier et vous aurez les résultats ahurissants. Avec une équipe experte professionnelle "+
    "dans ce qu’elle fait, étudier à l’etranger n’est plus un casse-tête.",
    lien:"contact",
    bouton:"Contactez-nous"
  }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image letGo={{src:item.src,style:{
          width:"100%",
        }}} alt="" />
      </CarouselItem>
    );
  });

  return (
    <SliderStc>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
        
         
      </Carousel>
         <Noschiffre clickIconSliderRight={next} clickIconSliderLeft={previous} letGo={{
           style:{
             marginTop:"-100px"
           }
         }}/>
    </SliderStc>
  );
};

export default Slider;
