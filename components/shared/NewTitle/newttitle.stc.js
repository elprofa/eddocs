import styled from "styled-components";

const Title = styled.div`
  border-bottom: 3px solid ${(props) => props.theme.secondary};
  width: fit-content;
  span {
    font-weight: bold;
  }
`;

export default Title;
