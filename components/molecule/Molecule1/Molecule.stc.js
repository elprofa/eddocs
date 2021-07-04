import Styled from "styled-components";
const defaultStyle={
    padding:"40px"
}
const MoleculeStc=Styled.div`
    ${defaultStyle};
    ${(props) => props.MonStyle || ""};
    div.row
    {
        padding: 30px 15px;
        padding-bottom:0px;
    }
    div.col-sm-4
    {
        padding: 0px;
    }
`;
export default MoleculeStc;