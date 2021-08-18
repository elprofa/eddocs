import Styled from "styled-components";

const SectionNosLaboratoireEssaisStc=Styled.div`

    .card
    {
        display: inline-table;
        @media (max-width: 991px) {
            display: block;
            margin:10px auto !important;
        }
    }

    .divCard::-webkit-scrollbar {
        width: 10px;
    }

    .divCard::-webkit-scrollbar-track {
        @media (min-width: 471px) {
            background-color: #ecf6fb;
            /* display: none; */
            border-bottom: 1px solid #ffffff;
        }
    }

    .divCard::-webkit-scrollbar-thumb {
        /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    }
    .divcard
    {
        
        @media (max-width: 471px) {
            overflow-x:scroll;
            overflow-y:hidden
            
        }
        .row
        {
            @media (max-width: 471px) {    
                min-width:900px;            
            }
        }
    }
    .divCard .card
    {
        @media (max-width: 991px) {
            display: table-cell !important;
            margin: 10px auto !important;
            
        }
        
        img
        {
            @media (max-width: 991px) {
                width: 150px;
            }
        }
    }
    .paragraphe
    {
        font-weight:600;
        font-size: 1.5rem;

        @media (max-width: 991px) {
            text-align:center;
        }
    }
`;

export default SectionNosLaboratoireEssaisStc;