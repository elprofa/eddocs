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
            bottom: 170px;
        }
        
    }

    .carousel-caption
    {
        top:20%;
    }
    
`;
export default SliderStc;