import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Title from "../../shared/Title";
import SliderStc from "./slider.stc";
import {BiTargetLock} from 'react-icons/bi'

const content = [
    
    {
      title: "",
      description:
        "",
      button: "Discover",
      image: "/img/quisommesnous/slide1.png",
      user: "",
      userProfile: ""
    },
    {
        title:"",
        description:"",
        button: "",
        image: "/img/quisommesnous/slide2.png",
        user: "",
        userProfile: ""
      },
  ];

  const SliderApropos=()=>{
      return (
        <SliderStc>
            <Slider className="slider-wrapper" autoplay="1000" infinite="true">
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
 export default SliderApropos;