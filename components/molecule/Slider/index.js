import React, { useState } from "react";
import Title from "../../shared/Title";
import Trait from "../../shared/Trait";
import Image from "next/image";
import SliderStc from './slider.stc.js'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Noschiffre from "../Noschiffre";
import { theme } from "../../../theme";
import image from "next/image";

const items = [
  {
    src: "/img/slide1.jpg",
    caption: <Title MyclassName="title" partOne={
      <>LE GROUPE AIR METROLOGIE - L2MI: POUR UNE MEILLEURE MAITRISE DES PROCESSUS DE MESURE</> } PartTwo="" number={1} type={1} />
  },
  {
    src: "/img/slide2.jpg",
    caption:<Title MyclassName="title" partOne={
      <>ETALONNAGE & VERIFICATION / ESSAIE/FORMATION / FORMATION & CONSEIL</>} PartTwo="" number={1} type={1} />
  },
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
        <img src={item.src} alt="" width="100%"  />
         <CarouselCaption captionText={""} captionHeader={item.caption} />
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
         <Noschiffre clickIconSliderRight={next} clickIconSliderLeft={previous} />
    </SliderStc>
  );
};

export default Slider;
