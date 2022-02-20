import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderClientStc from './SliderClient.stc';
import { BsArrowDown } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

import CardClient from "../CardClient";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 0
  },
  tablet: {
    breakpoint: { max: 1024, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 476, min: 0 },
    items: 1,
    paritialVisibilityGutter: 0
  }
};
const colors = [
  {
    image:"/img/news/client.jpeg",
    site:"https://gsnauto.com/",
    note:<><span style={{color:"#f59e1c "}}><AiFillStar /><AiFillStar /><AiFillStar /></span>: 11-08-18</>,
    resume:<span>
      Le lorem ipsum est, en imprimerie, une suite de mots sans 
      signification utilisée à titre provisoire pour calibrer 
      une mise en page, le texte définitif venant remplacer le 
      faux-texte dès qu'il est prêt ou que la mise en page est achevée.
    </span>},
  {
    image:"/img/news/slide1.jpeg",
    site:"https://gsnauto.com/",
    note:<><span style={{color:"#f59e1c "}}><AiFillStar /><AiFillStar /><AiFillStar /></span>: 11-08-18</>,
    resume:<span>
      Le lorem ipsum est, en imprimerie, une suite de mots sans 
      signification utilisée à titre provisoire pour calibrer 
      une mise en page, le texte définitif venant remplacer le 
      faux-texte dès qu'il est prêt ou que la mise en page est achevée.
    </span>,
  },
  {
    image:"/img/news/slide2.jpeg",
    site:"https://gsnauto.com/",
    note:<><span style={{color:"#f59e1c "}}><AiFillStar /><AiFillStar /><AiFillStar /></span>: 11-08-18</>,
    resume:<span>
      Le lorem ipsum est, en imprimerie, une suite de mots sans 
      signification utilisée à titre provisoire pour calibrer 
      une mise en page, le texte définitif venant remplacer le 
      faux-texte dès qu'il est prêt ou que la mise en page est achevée.
    </span>,
  },
  {
    image:"/img/news/slide3.jpeg",
    site:"https://gsnauto.com/",
    note:<><span style={{color:"#f59e1c "}}><AiFillStar /><AiFillStar /><AiFillStar /></span>: 11-08-18</>,
    resume:<span>
      Le lorem ipsum est, en imprimerie, une suite de mots sans 
      signification utilisée à titre provisoire pour calibrer 
      une mise en page, le texte définitif venant remplacer le 
      faux-texte dès qu'il est prêt ou que la mise en page est achevée.
    </span>,
  },
  {
    image:"/img/news/slide4.jpeg",
    site:"https://gsnauto.com/",
    note:<><span style={{color:"#f59e1c "}}><AiFillStar /><AiFillStar /><AiFillStar /></span>: 11-08-18</>,
    resume:<span>
      Le lorem ipsum est, en imprimerie, une suite de mots sans 
      signification utilisée à titre provisoire pour calibrer 
      une mise en page, le texte définitif venant remplacer le 
      faux-texte dès qu'il est prêt ou que la mise en page est achevée.
    </span>,
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const SliderClient = ({ deviceType }) => {
  return (
    <Carousel 
    autoPlay={true} 
    infinite={true}
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      showDots={true}
    >
      {colors.map((element,index) => {
        return (
          <SliderClientStc key={index} className="content">
             <CardClient letGo={{
               image:element.image,
               texte:element.resume,
               site:element.site,
               note:element.note
             }} />
            
          </SliderClientStc>
        );
      })}
    </Carousel>
  );
};

export default SliderClient;
