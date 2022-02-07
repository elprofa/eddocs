import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Title from "../../shared/Title";
import SliderStc from "./slider.stc";
import {BiTargetLock} from 'react-icons/bi'

const content = [
    {
      title:<Title MyclassName="title" partOne={
        <>LE GROUPE AIR METROLOGIE - L2MI: Des laboratoires Leaders en Métrologie !</> } PartTwo="" number={1} type={1} />,
      description:"",
      button: "",
      image: "/img/slide1.jpg",
      user: "",
      userProfile: ""
    },
    {
      title: <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="myborder"></div>
          </div>
          <div className="col-lg-9">
            <h1 className="h1captionTitle my-2 my-md-4">
              <span className="icon"><BiTargetLock/></span>
              <span className="captionTitle">ETALONNAGE & VERIFICATION </span>
              <hr />
            </h1>
            <h1 className="h1captionTitle my-2 my-md-4">
              <span className="icon iconcenter"><BiTargetLock/></span>
              <span className="captionTitle">ESSAIE </span>
              <hr />
            </h1>
            <h1 className="h1captionTitle my-2 my-md-4">
              <span className="icon"><BiTargetLock/></span>
              <span className="captionTitle">FORMATION & CONSEIL </span>
              <hr />
            </h1>
          </div>
        </div>
      </div>,
      description:
        "",
      button: "Discover",
      image: "/img/slide2.jpg",
      user: "",
      userProfile: ""
    },
    {
        title:<Title MyclassName="title title1" partOne={
          <><img src="/img/g327.png" width="80%" /></> } PartTwo="" number={1} type={1} />,
        description:"",
        button: "",
        image: "/img/Accueil/a.png",
        user: "",
        userProfile: ""
      },
  ];

  const Slider1=()=>{
      return (
        <SliderStc>
            <Slider className="slider-wrapper" autoplay="2000" infinite="true">
            {content.map((item, index) => (
                <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                <div className="inner">
                    {item.title}
                </div>
            </div>
            ))}
            </Slider>
        </SliderStc>
      )
  }
 export default Slider1;