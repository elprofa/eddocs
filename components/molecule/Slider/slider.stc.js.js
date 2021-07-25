import Styled from 'styled-components';

const SliderStc=Styled.section`
.title h2
{
    border:0px !important;
    font-weight:600;
    
}
.title
{
    max-width:660px;
}
a.carousel-control-prev,a.carousel-control-next
{
    display: none !important;
}
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

        .carousel-item
        {
            
        }
    }
    
    .carousel-inner
    {
        height: fit-content;
    }
`;
export default SliderStc;