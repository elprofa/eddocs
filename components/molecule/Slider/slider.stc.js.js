import Styled from 'styled-components';

const SliderStc=Styled.section`
    .carousel-control-next-icon, .carousel-control-prev-icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: 50%/100% 100% no-repeat;
        bottom: 139px;
        position: absolute;
        display: none;
    }
    .carousel-indicators
    {
        @media screen and (min-width: 768px)
        {
            bottom: 250px;
           
        }
        @media screen and (max-width: 768px)
        {
            display: none;
        }
        
    }

    .carousel-caption
    {
        top:20%;
    }
    .carousel.slide
    {
        height:100vh;
        @media screen and (max-width: 767px)
        {
            height:50vh;
        }

        .carousel-item
        {
            height: 100vh;
            @media screen and (max-width: 767px)
            {
                height:50vh;
            }
        }
    }
    
`;
export default SliderStc;