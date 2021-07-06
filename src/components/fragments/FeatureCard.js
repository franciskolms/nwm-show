import React from "react";

import styled from "styled-components";
import { Grid } from "../styles/Layout";

const Wrapper = styled.div`
  background: ${(props) => props.theme.greyLt};
`;

const Icon = styled.div`
  padding: 1rem;
  width: 5rem;
`;

const TitleWrap = styled.div``;

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
  padding: 0rem 1rem 1rem 1rem;
`;

function FeatureCard(props) {
  const GridStyle = {
    borderBottom: `2px solid #FD4714`,
  };

  return (
    <Wrapper>
      <Grid custom="1fr 2.5fr" style={GridStyle}>
        <Icon style={{ paddingTop: props.top }}>{props.icon}</Icon>
        <TitleWrap>
          <Title>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
        </TitleWrap>
      </Grid>
      <Text>{props.paragraph1}</Text>
      {props.paragraph2 ? <Text>{props.paragraph2}</Text> : null}
    </Wrapper>
  );
}

export default FeatureCard;
