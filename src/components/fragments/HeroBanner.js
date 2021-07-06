import React from "react";

import styled from "styled-components";
import { ReactComponent as Emoji } from "../../images/surprise-emoji.svg";
import { ReactComponent as Ornament } from "../../images/header-stripes-bg.svg";
import { Container, Grid } from "../styles/Layout";
import { Button } from "../styles/Button";

// Styled styles
const HeaderHeight = "68.5vh";

const Wrapper = styled.div`
  height: ${HeaderHeight};
  min-height: 30rem;
  max-height: 35rem;
  position: relative;
  background: ${(props) => props.theme.gradient1};
`;

const Heading = styled.h1`
  color: white;
  font-weight: 600;
  font-size: 2.5rem;
  /* margin: auto; */
`;
const Body = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 2rem;
`;

const InfoWrap = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const EmojiWrap = styled.div`
  height: 3rem;
  display: inline;
`;

const EmojiIcon = styled(Emoji)`
  width: 3rem;
  margin-right: 1rem;
`;

const Arrows = styled(Ornament)`
  position: absolute;
  height: 100%;
`;

const TriangleDown = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 30px solid #2d0068;
  position: absolute;
  margin-top: ${HeaderHeight};
  left: 47%;
`;

// Inline styles
const ContainerStyle = {
  height: HeaderHeight,
  display: "table",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function HeroBanner() {
  return (
    <Wrapper>
      <Arrows />
      <Container style={ContainerStyle}>
        <InfoWrap>
          <Heading>
            <Grid custom={"1fr 13fr"}>
              <EmojiWrap>
                <EmojiIcon />
              </EmojiWrap>
              <span>Notice how this page loaded instantly!</span>
            </Grid>
          </Heading>
          <Body>
            We encourage you to browse our site and observe no loading time
            between the pages. This is the future.
          </Body>
          <Body>
            Wish your new site was super fast too?
            <br />
            No problem! We sit ready to code.
          </Body>
          <Grid lg={3} gap="2rem" auto>
            <Button primary>Get A Quote</Button>
            <Button>Why Choose Us?</Button>
          </Grid>
        </InfoWrap>
      </Container>
      <TriangleDown />
    </Wrapper>
  );
}

export default HeroBanner;
