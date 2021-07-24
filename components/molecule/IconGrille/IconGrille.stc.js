import Styled from 'styled-components';

const IconGrilleStc=Styled.div`
    width: fit-content;
    position:absolute;
    @media (max-width: 991px) {
        display:none;
    }

    &.left
    {
        width: 100%;
        position: relative;
        top: -52px;
        margin-top: -135px;
        
        img 
        {
            float:right;
        }
    }
`;
export default IconGrilleStc;