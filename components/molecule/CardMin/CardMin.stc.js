import { Col } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const CardMinStc=Styled(Col)`
    width: 170px;
    text-align: center;
    font-weight: 600;
    height:170px;
    @media (max-width: 991px) {
        height:auto;
    }
    border:0px;
    background:${theme.colors.kingGreen} !important;
    img 
    {
        display: block;
        margin:auto;
        @media (max-width: 991px) {
            min-height:120px;
            min-width:120px;
        }

        &:hover
        {
            animation: myAnim 2s ease 0s 1 normal forwards;
        }
        @keyframes myAnim {
            0%,
            100% {
              transform: translateX(0%);
              transform-origin: 50% 50%;
            }
          
            15% {
              transform: translateX(-30px) rotate(-6deg);
            }
          
            30% {
              transform: translateX(15px) rotate(6deg);
            }
          
            45% {
              transform: translateX(-15px) rotate(-3.6deg);
            }
          
            60% {
              transform: translateX(9px) rotate(2.4deg);
            }
          
            75% {
              transform: translateX(-6px) rotate(-1.2deg);
            }
          }
    }


        
`;
export default CardMinStc;