import React, { useState } from "react";
import Title from "../../shared/Title";
import Trait from "../../shared/Trait";
import Image from "../../shared/Image";
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

const items = [
  {
    src: "/img/slide1.jpg",
    caption: <Title letGo={{
      texte:<>
        <span>CALIBREZ VOS INSTRUMENTS POUR AMELIORER VOS PERFORMANCES</span>
        <Trait letGo={{
            style:{
              width: "20%",
              margin: "auto",
              marginTop:theme.margins.KingParagraphe
          }
        }} />
        </>,
        style:{
          fontWeight:"400",
          fontSize:theme.font.headingFontSizes.h2,
          fontWeight:600,
          color:theme.colors.white
       }
    }} />
  },
  {
    src: "/img/slide2.jpg",
    caption:<Title letGo={{
      texte:<>
        <span>DES LABORATOIRES PERFORMANTS ET DES EQUIPEMENTS DE QUALITE</span>
        <Trait letGo={{
            style:{
              width: "20%",
              margin: "auto",
              marginTop:theme.margins.KingParagraphe
          }
        }} />
        </>,
        style:{
          fontWeight:"400",
          fontSize:theme.font.headingFontSizes.h2,
          fontWeight:600,
          color:theme.colors.white,
       }
    }} />
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
         <Noschiffre clickIconSliderRight={next} clickIconSliderLeft={previous} letGo={{
           style:{
             marginTop:"-100px"
           }
         }}/>
    </SliderStc>
  );
};

export default Slider;
