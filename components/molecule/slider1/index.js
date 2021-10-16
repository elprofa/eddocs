import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Title from "../../shared/Title";
import SliderStc from "./slider.stc";
const content = [
    {
      title:<Title MyclassName="title" partOne={
        <>LE GROUPE AIR METROLOGIE - L2MI: Des laboratoires leaders en Métrologie</> } PartTwo="" number={1} type={1} />,
      description:"",
      button: "",
      image: "/img/slide1.jpg",
      user: "",
      userProfile: ""
    },
    {
      title: <Title MyclassName="title" partOne={
        <>ETALONNAGE & VERIFICATION / ESSAIE / FORMATION & CONSEIL</>} PartTwo="" number={1} type={1} />,
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
        image: "/img/slide1.jpg",
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