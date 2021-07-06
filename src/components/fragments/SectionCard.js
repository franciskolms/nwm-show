import React from "react";

import styled from "styled-components";
import { Grid } from "../styles/Layout";

const Wrapper = styled.div`
  background: ${(props) => props.theme.greyLt};
  margin-top: 1rem;
`;

const TitleWrap = styled.div`
  padding-left: 2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const Subtitle = styled.h4`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: 300;
`;

const Text = styled.p`
  padding: 0rem 2rem 1rem 2rem;
  margin-top: 0;
`;

function SectionCard(props) {
  const GridStyle = {
    borderBottom: `2px solid #FD4714`,
  };

  return (
    <Wrapper>
      <Grid lg={2} style={GridStyle}>
        {/* <Icon style={{ paddingTop: props.top }}>{props.icon}</Icon> */}
        <TitleWrap>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </TitleWrap>
        <Grid lg={6} gap="1rem" center>
          {props.icons}
        </Grid>
      </Grid>
      <Text>{props.children}</Text>
    </Wrapper>
  );
}

export default SectionCard;
