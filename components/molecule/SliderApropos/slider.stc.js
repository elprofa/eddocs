import Styled from 'styled-components'

const SliderStc=Styled.div`
    
button:hover {
    color: #FFFFFF;
    background: #222222;
    -webkit-filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
  }

  .myborder
  {
    height: 100%;
    border: 0px !important;
    border-right: 5px solid #12499f !important;
    border-radius: 100%;
    width: 100%;
    position: relative;
    right: -60px;
    @media screen and (max-width: 996px)
    {
      display:none;
    }
  }

  .h1captionTitle
  {
    background: rgb(0,0,0,.7);
    padding: 12px;
    text-align:left;
    
    @media screen and (min-width: 996px)
    {
      float: left;
      width:622px;
    }

    @media screen and (max-width: 996px)
    {
      background: transparent;
      text-align:center;
    }

    hr
    {
      height: 2px;
      color: #ff0000;
      opacity: 1;
      width: 50%;
      margin: auto;
      margin-top: 10px;
      @media screen and (min-width: 996px)
      {
        display:none;
      }
    }
    .icon.iconcenter
    {
      margin-left: -12px;
    }
    .icon
    {
      background: #fff;
      min-width: 27px;
      height: 20px;
      padding: 7px;
      border-radius: 100%;
      margin-right: 15px;
      margin-left: -40px;
      border: 4px solid #12499f;

      @media screen and (max-width: 996px)
      {
          display:none;
      }
      svg
      {
        font-size: 60px;
        color: #000;
        margin-top: -5px;
      }
    }
  }
  
  .wrapper {
    max-width: 1335px;
    box-sizing: border-box;
    padding: 0 20px;
    margin: auto;
  }
  
  .wrapper a {
    display: inline-block;
    margin: 5px;
  }
  
  .wrapper a:first-child {
    margin-left: 0;
  }
  
  .slider-wrapper {
    position: relative;
    height: 480px;
    overflow: hidden;
  }
  
  .slide {
    height: 90vh;
    background-size: cover !important;
  }
  
  .slide::before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(0, 0, 0, 0.9)));
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
      bottom: 0;
      left: 0;
  }
  
  .previousButton, .nextButton {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: url('/img/right.png') no-repeat center center / 16px;
          width: 50px;
          height: 50px;
          text-indent: -9999px;
          cursor: pointer;
  }
  
//   .previousButton:hover, .nextButton:hover {
//     background: url('/img/left.png') no-repeat center center / 16px;
//   }
  
  .previousButton {
    left: 0;
    @media screen and (min-width: 768px)
    {
        left:100px
    }
    -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
            transform: rotate(180deg) translateY(calc(50% + 0px));
  }
  
//   .previousButton:hover {
//     left: -10px;
//   }
  
  .nextButton {
    right: 0;
    @media screen and (min-width: 768px)
    {
        right:100px;
    }
  }
  
  .slider-content {
    text-align: center;
  }
  
  .slider-content .inner {
    padding: 0 70px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    top: 50%;
    @media screen and (min-width: 768px)
    {
        top: 36%;
       
    }
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            .title.title1
            {
              background:transparent !important;
              h1:after
              {
                border:0px !important;
              }
            }
            .title
            {
                @media screen and (min-width: 768px)
                {
                    background:rgb(0,0,0,.5);
                    padding: 65px 40px;
                }
                h1{

                    @media screen and (min-width: 768px)
                    {
                        line-height:1.3em !important
                    }
                    
                    
                }
               
            }
  }
  
  .slider-content .inner button{
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
  }
  
  .slider-content .inner h1 {
    font-weight: 900;
    margin: 0 auto;
    max-width: 840px;
    color: #FFFFFF;
    font-size:2.5rem;
    line-height: 1;
  }
  
  .slider-content .inner p {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 1.5;
    margin: 20px auto 30px;
    max-width: 640px;
  }
  
  .slider-content section {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  
  .slider-content section span {
    color: #FFFFFF;
  }
  
  .slider-content section span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    display: inline-block;
    text-align: left;
    line-height: 1.4;
    vertical-align: middle;
    margin-left: 10px;
  }
  
  .slider-content section img {
    width: 40px;
    height: 40px;
    border: solid 2px rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    vertical-align: middle;
  }
  
  .slider-content section span strong {
    color: #FFFFFF;
    font-size: 14px;
    display: block;
  }
  
  @media (max-height: 500px) {
    .slider-wrapper, .slide {
      height: calc(100vh - 75px);
    }    
  }
  
  @media (max-width: 640px) {
    .slider-wrapper, .slide {
      height: calc(80vh - 75px);
    }    
  }
  
  @media (max-height: 600px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }    
  }
  
  @media (max-width: 640px) {
    .slider-content .inner h1 {
      font-size: 32px;
    }
  }

  .slide h1 {
	transition: all 0.3s ease;
	-webkit-transform: translateY(-20px);
					transform: translateY(-20px);
	opacity: 0;
}

.slide button {
	transition: all 0.3s ease;
	-webkit-transform: translateY(20px);
					transform: translateY(20px);
	opacity: 0;
}

.slide p {
	transition: all 0.3s ease;
	-webkit-transform: translateY(20px);
					transform: translateY(20px);
	opacity: 0;
}

.slide section * {
	transition: all 0.3s ease;
}

.slide section img {
	-webkit-transform: translateX(-10px);
					transform: translateX(-10px);
	opacity: 0;
}

.slide section span {
	-webkit-transform: translateY(-10px);
					transform: translateY(-10px);
	opacity: 0;
}

.slide section span strong {
	-webkit-transform: translateY(10px);
					transform: translateY(10px);
	opacity: 0;
}

.slide.animateIn.previous h1,
.slide.current h1,
.slide.animateIn.next h1,
.slide.animateIn.previous button,
.slide.current button,
.slide.animateIn.next button,
.slide.animateIn.previous p,
.slide.current p,
.slide.animateIn.next p,
.slide.animateIn.previous section *,
.slide.current section *,
.slide.animateIn.next section * {
	-webkit-transform: translateX(0);
	        transform: translateX(0);
	-webkit-transition-delay: .9s;
					transition-delay: .9s;
					opacity: 1;
}

.slide.animateIn.previous p,
.slide.animateIn.next p {
	-webkit-transition-delay: 1.1s;
					transition-delay: 1.1s;
}

.slide.animateIn.previous button,
.slide.animateIn.next button {
	-webkit-transition-delay: 1.3s;
					transition-delay: 1.3s;
}

.slide.animateIn.previous section img,
.slide.animateIn.next section img {
	-webkit-transition-delay: 1.3s;
					transition-delay: 1.3s;
}

.slide.animateIn.previous section span,
.slide.animateIn.next section span {
	-webkit-transition-delay: 1.4s;
					transition-delay: 1.4s;
}

.slide.animateIn.previous section span strong,
.slide.animateIn.next section span strong {
	-webkit-transition-delay: 1.5s;
					transition-delay: 1.5s;
}

.slide.animateOut h1 {
	-webkit-transition-delay: .3s;
					transition-delay: .3s;
}

.slide.animateOut p {
	-webkit-transition-delay: .2s;
					transition-delay: .2s;
}

.slide.animateOut section span {
	-webkit-transition-delay: .1s;
					transition-delay: .1s;
}

.slide.animateOut section span strong {
	-webkit-transition-delay: 0s;
					transition-delay: 0s;
}

`;
export default SliderStc;