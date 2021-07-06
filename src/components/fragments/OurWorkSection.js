import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Container, Grid } from "../styles/Layout";
import { Button, ButtonWrap } from "../styles/Button";
import PortfolioCard from "./PortfolioCard";

const Text = styled.h2`
  text-align: center;
`;

const containerStyle = {
  paddingTop: "4rem",
};

function OurWorkSection(props) {
  return (
    <Container style={containerStyle}>
      <Grid lg={2} gap="2rem">
        <PortfolioCard
          title="yellowsigns.co.uk"
          url="https://yellowsigns.co.uk"
          img="./images/portfolio-yellowsigns.png"
        />
        <PortfolioCard
          title="yellowsigns.co.uk"
          url="https://yellowsigns.co.uk"
          img="./images/portfolio-yellowsigns.png"
        />
      </Grid>
      <Text>
        We'll let our work do the talking here. <br />
        Take a look at the pages we have completed recently.
      </Text>
      <ButtonWrap>
        <Link to="/portfolio">
          <Button>Our Recent Work</Button>
        </Link>
      </ButtonWrap>
    </Container>
  );
}

export default OurWorkSection;
