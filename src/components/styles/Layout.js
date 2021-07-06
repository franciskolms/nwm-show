import styled from "styled-components";

export const Container = styled.div`
  width: 1020px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  ${(props) =>
    props.lg
      ? `grid-template-columns: repeat(${props.lg}, ${
          props.auto ? "auto" : "1fr"
        })`
      : null};
  ${(props) => (props.custom ? `grid-template-columns:${props.custom}` : null)};
  grid-column-gap: ${(props) => (props.gap ? props.gap : null)};
  grid-row-gap: ${(props) => (props.gap ? props.gap : null)};
  align-content: ${(props) => (props.center ? "center" : null)};
`;
