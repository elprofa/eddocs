import { Row } from "reactstrap";
import Styled from "styled-components";
import { theme } from "../../../theme";

 const SideBarLaboStc=Styled.div`
    display: inline-flex !important;
    .nav-pills .nav-link.active, .nav-pills .nav-link:hover
    {
        transition:.6s;
        color: #fff;
        background-color: ${theme.colors.KingBleu};
        padding: 20px;
        border-radius: 0px;
    }
    .nav-pills .nav-link
    {
        padding: 20px;
        border-radius: 0px;
    }
    ${(props) => props.MonStyle || ""};
`;
export default SideBarLaboStc;