import Styled from "styled-components";

const SectionNosLaboratoireEtatlonnageStc=Styled.div`

    .card
    {
        display: inline-table;
        @media (max-width: 991px) {
            display: block;
            margin:10px auto !important;
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

export default SectionNosLaboratoireEtatlonnageStc;