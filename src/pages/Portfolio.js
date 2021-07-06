import React from "react";

import styled, { withTheme } from "styled-components";

import NavBar from "../components/fragments/NavBar";
import PageHeader from "../components/fragments/PageHeader";
import Footer from "../components/fragments/Footer";

import CTABox from "../components/fragments/CTABox";
import { Container, Grid } from "../components/styles/Layout";
import PortfolioCard from "../components/fragments/PortfolioCard";

const Dots = styled.div`
  text-align: center;
  margin-top: 2rem;
`;
const Dot = styled.div`
  clip-path: circle(50% at 50% 50%);
  background: ${(props) => props.theme.greyLt};
  height: 1rem;
  width: 1rem;
  display: inline-block;
  margin: 0.25rem;
`;

const PortfolioItems = [
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.jpg",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
  {
    title: "yellowsigns.co.uk",
    url: "https://yellowsigns.co.uk",
    img: "./images/portfolio-yellowsigns.png",
  },
];

const ListPortfolioItems = PortfolioItems.map((item, index) => (
  <PortfolioCard
    key={index}
    title={item.title}
    url={item.url}
    img={item.img}
  ></PortfolioCard>
));

function Portfolio(props) {
  return (
    <>
      <NavBar />
      <PageHeader title="Portfolio" bg={props.theme.gradient5}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa
        sapien faucibus et molestie ac feugiat sed.
      </PageHeader>
      <Container style={{ marginTop: "2rem" }}>
        <Grid lg={2} gap="2rem">
          {ListPortfolioItems}
        </Grid>
        <Dots>
          <Dot />
          <Dot />
          <Dot />
        </Dots>
      </Container>
      <CTABox />
      <Footer />
    </>
  );
}

export default withTheme(Portfolio);
