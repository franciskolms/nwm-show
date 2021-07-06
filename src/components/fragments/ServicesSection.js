import React from "react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import { Container, Grid } from "../styles/Layout";
// import { ReactComponent as FrontendUx } from "../../images/frontend-ux-colour.svg";
import FrontendUx from "../../images/frontend-ux-colour.svg";

import Stripe from "../../images/stripe-white-opaque.svg";
import { Button, ButtonWrap } from "../styles/Button";

const distance = 4;
const border = 0.3;
const violet = "#350377";

const stream = keyframes`
0% {background-position-x: 0px}
100% {background-position-x: 25px}
`;

const Wrapper = styled.div`
  /* height: 80vh; */
  background: ${(props) => props.theme.gradient7};
  /* padding: 4rem; */
`;

const UpperBox = styled.div`
  height: 10rem;
  background: white;
  border-bottom: ${border + "rem"} ${violet} solid;
  box-shadow: -6px 6px 6px 0px #8a8a8a24;
`;

const LowerBox = styled.div`
  height: 10rem;
  background: white;
  margin-top: ${distance + "rem"};
  border-top: ${border + "rem"} ${violet} solid;
  box-shadow: -6px 6px 6px 0px #8a8a8a24;
`;

const ProgressBar = styled.div`
  height: 2rem;
  width: 100%;
  background-color: ${violet};
  background-image: url(${Stripe});
  animation: ${stream} 4s infinite;
  animation-timing-function: linear;
  margin-top: ${distance + "rem"};
`;

const TextWrap = styled.div`
  height: 7rem;
  padding: 1.5rem;
  text-align: center;
`;

const Text = styled.p``;
const Title = styled.h3`
  display: inline-block;
`;

const Stalk = styled.div`
  height: ${distance + border + "rem"};
  background: ${violet};
  width: 0.5rem;
  position: relative;
  margin: 0 auto;
`;

const Number = styled.div`
  text-align: center;
  margin-top: 0.3rem;
  color: white;
`;

const CalloutTitle = styled.h2`
  padding: 2rem 0;
  font-weight: 400;
`;

const Acc = styled.span`
  font-weight: 600;
`;

const Icon = styled.img`
  width: 2rem;
  vertical-align: sub;
  margin-right: 0.5rem;
`;

// Individual inline style adjustments
const UpperGrid = {
  padding: "4rem 4rem 0 4rem",
};

const LowerGrid = {
  width: "60%",
  margin: "0 auto",
};

const NumberAdj = {
  margin: "-5.95rem 0 .36rem 0",
};

function ServicesSection(props) {
  return (
    <Wrapper>
      <Grid lg={3} gap="4rem" style={UpperGrid}>
        <UpperBox>
          <TextWrap>
            <Text>
              Bespoke Graphic Design and tailored UX experience that fit your
              exact requirements
            </Text>
            <Icon src={FrontendUx} />
            <Title>Frontend Design & UX</Title>
          </TextWrap>
          <Stalk />
          <Number>1</Number>
        </UpperBox>
        <UpperBox>
          <TextWrap>
            <Text>
              Our developers code to achieve excellence in speed, security and
              asset optimisation
            </Text>
            <Icon src={FrontendUx} />
            <Title>Web Development</Title>
          </TextWrap>
          <Stalk />
          <Number>3</Number>
        </UpperBox>
        <UpperBox>
          <TextWrap>
            <Text>
              Digital marketing and IT support to make your site perform and run
              smoothly
            </Text>
            <Icon src={FrontendUx} />
            <Title>Marketing & Support</Title>
          </TextWrap>
          <Stalk />
          <Number>5</Number>
        </UpperBox>
      </Grid>

      <ProgressBar />

      <Grid lg={2} gap="4rem" style={LowerGrid}>
        <LowerBox>
          <Number style={NumberAdj}>2</Number>
          <Stalk />
          <TextWrap>
            <Icon src={FrontendUx} />
            <Title>Content Copywriting</Title>
            <Text>
              Agreeing on site content, base SEO strategy and copywriting pages
            </Text>
          </TextWrap>
        </LowerBox>
        <LowerBox>
          <Number style={NumberAdj}>4</Number>
          <Stalk />
          <TextWrap>
            <Icon src={FrontendUx} />
            <Title>Project Launch</Title>
            <Text>
              Finalising the last bits and launching the site. Enjoy 1 month
              free after-launch support.
            </Text>
          </TextWrap>
        </LowerBox>
      </Grid>
      <Container>
        <CalloutTitle>
          From full <Acc>frontend design</Acc> through{" "}
          <Acc>web development</Acc>, <Acc>marketing and support</Acc>, our
          systems are perfectly oiled to provide you tailored solutions from
          inspiring 5-page presentational sites to complex ecommerce stores and
          social apps
        </CalloutTitle>
        <ButtonWrap>
          <Link to="/services">
            <Button>Services</Button>
          </Link>
        </ButtonWrap>
      </Container>
    </Wrapper>
  );
}

export default ServicesSection;
