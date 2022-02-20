import Styled from 'styled-components'
import { theme } from '../../../theme';
const SectionAutreDomaineStc=Styled.section`
    .caption {
        display: block;
        margin: auto;
        background: ${theme.colors.kingGreen};
        text-align:center;
    }


li.cas1,li.cas2,li.cas3,li.cas4,li.cas5,li.cas6,li.cas7,li.cas8,li.cas9,li.cas10,li.cas11 {
    list-style: none;
}

li.cas1 a, li.cas2 a,li.cas3 a,li.cas4 a,li.cas5 a,li.cas6 a,li.cas7 a,li.cas8 a,li.cas9 a,li.cas10 a,li.cas11 a {
    font-size: 25px;
    text-decoration: none;
}

li.cas1 a span {
    color: #ea7b32;
    font-size: 50px;
}
li.cas2 a span {
    color: #94d451;
    font-size: 50px;
}
li.cas3 a span {
    color: #376dc0;
    font-size: 50px;
}
li.cas4 a span {
    color: #59b0f0;
    font-size: 50px;
}
li.cas5 a span {
    color: #e62e2d;
    font-size: 50px;
}
li.cas6 a span {
    color: #e7424f;
    font-size: 50px;
}
li.cas7 a span {
    color: #376dc0;
    font-size: 50px;
}
li.cas8 a span {
    color: #ea7b32;
    font-size: 50px;
}
`;
export default SectionAutreDomaineStc;