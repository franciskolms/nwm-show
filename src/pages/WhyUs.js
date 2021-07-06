import React from "react";

import styled, { withTheme } from "styled-components";
import { Container, Grid } from "../components/styles/Layout";
import { ReactComponent as SpeedIcon } from "../images/speed-icon.svg";

import NavBar from "../components/fragments/NavBar";
import PageHeader from "../components/fragments/PageHeader";
import FeatureCard from "../components/fragments/FeatureCard";
import CTABox from "../components/fragments/CTABox";
import Footer from "../components/fragments/Footer";
import Heart from "../components/fragments/Heart";

const Acc = styled.span`
  font-weight: 500;
  background: ${(props) => props.theme.primary};
  padding: 0 0.5rem 0.2rem 0.5rem;
  border-radius: ${(props) => props.theme.radius};
`;

const CardContent = [
  {
    title: "Speed",
    subtitle: "Fast and Snappy",
    paragraph1: `Having a website that is fast is not only a 'nice to have', but it also tells something about your business - your business is responsive and forward looking. PHP and Wordpress sites are still used by most businesses*`,
    paragraph2:
      "Do you want to be stuck in the past fast forward to the future? ",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "Security",
    subtitle: "Safe and Secure",
    paragraph1:
      "As you probably read in the news these days, hackers and bad actors are all over the web looking for their next prey. Since we don't use any 'Wordress plugins' and what not, there goes the possibility to exploit all those loopholes.",
    paragraph2:
      "Our methods are following latest security standards making your site very safe.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "SEO Optimised",
    subtitle: "Get discovered",
    paragraph1:
      "We have full-time proactive SEO experts at hand who assist us making sure the best and most up to date SEO practices are employed when developing your site with a full check-up and review before your site gets launched.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "Marketing Expertise",
    subtitle: "In-house digital marketers ready",
    paragraph1:
      "We have full-time proactive SEO experts at hand who assist us making sure the best and most up to date SEO practices are employed when developing your site with a full check-up and review before your site gets launched.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "Design",
    subtitle: "Beautiful and Functional",
    paragraph1:
      "This goes without saying - a fast site needs not only beautiful but also functional design that drives the message home. By having digital marketers working at our sister company New Window Marketing, we ensure that your site will not only be beautiful but also fulfils the purpose effectively - be it a form submission or a product purchase.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "Friendly Service",
    subtitle: "Fast and Snappy",
    paragraph1:
      "We believe this is one of the most important areas in web development to make you 100% happy about the result. You will be assigned one account manager who will make sure your website plans become reality from the very beginning until the end and beyond.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
  {
    title: "Latest Tech",
    subtitle: "Fast and Snappy",
    paragraph1:
      "We are a bunch of geeks pushing the boundaries of what's possible. Nowadays, large corporations are moving away from PHP centred apps to more dynamic frameworks such as React, Vue, Nodejs due to the scalability and massive speed improvements* among other things. We offer you the same but at a reasonable price.",
    icon: <SpeedIcon />,
    top: "2rem",
  },
];

const ListCardContentItems = CardContent.map((item, index) => (
  <FeatureCard
    key={index}
    title={item.title}
    subtitle={item.subtitle}
    paragraph1={item.paragraph1}
    paragraph2={item.paragraph2}
    icon={item.icon}
    top={item.top}
  />
));

function WhyUs(props) {
  return (
    <>
      <NavBar />

      <PageHeader title="Why Us" bg={props.theme.gradient2}>
        Our highly focused code crunching team assisted by our sister company
        New Window Marketing will ensure that your website is not only{" "}
        <Acc>secure</Acc> and <Acc>fast</Acc> but also <Acc>beautiful</Acc> and{" "}
        <Acc>functional</Acc> bringing your visitors delight <Heart />
      </PageHeader>

      <Container style={{ marginTop: "1rem" }}>
        <Grid lg={2} gap={"1rem"}>
          {ListCardContentItems}
        </Grid>
      </Container>
      <CTABox />
      <Footer />
    </>
  );
}

export default withTheme(WhyUs);
