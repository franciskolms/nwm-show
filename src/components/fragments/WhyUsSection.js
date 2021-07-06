import React from "react";

import styled from "styled-components";
import { Container, Grid } from "../styles/Layout";

import Stripe from "../../images/stripe-white.svg";
import Screens from "../../images/screens.png";
import { Button, ButtonWrap } from "../styles/Button";
import { Link } from "react-router-dom";

const padding = 3;

const Wrapper = styled.div`
  /* height: 80vh; */
  background: ${(props) => props.theme.gradient1};
`;

const TextWrapper = styled.div`
  color: white;
  margin: auto;
  /* display: table; */
  position: relative;
`;

const Text = styled.div`
  font-weight: 200;
  font-size: 1.75rem;
  width: 15rem;
  &:before {
    content: url(${Stripe});
    position: absolute;
    margin-left: -3rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const BoxOneStyle = {
  paddingLeft: padding + "rem",
  paddingBottom: padding + "rem",
  paddingTop: padding * 3 + "rem",
};

const BoxTwoStyle = {
  paddingLeft: padding * 2 + "rem",
  paddingBottom: padding + "rem",
};

const BoxThreeStyle = {
  paddingLeft: padding * 3 + "rem",
  paddingBottom: padding * 3 + "rem",
};

const ScreensImg = styled.img`
  width: 100%;
  margin: auto;
`;

function WhyUsSection(props) {
  return (
    <Wrapper>
      <Container>
        <Grid lg={2} center>
          <TextWrapper>
            <Text style={BoxOneStyle}>Bespoke designs and solutions</Text>
            <Text style={BoxTwoStyle}>Focused on speed and performance</Text>
            <Text style={BoxThreeStyle}>
              Professional service at every step
            </Text>
          </TextWrapper>
          <ScreensImg src={Screens} />
        </Grid>
        <ButtonWrap>
          <Link to="/whyus">
            <Button>Why Us</Button>
          </Link>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
}

export default WhyUsSection;
