import React from "react";

import styled, { withTheme } from "styled-components";

import NavBar from "../components/fragments/NavBar";
import PageHeader from "../components/fragments/PageHeader";
import Footer from "../components/fragments/Footer";

import CTABox from "../components/fragments/CTABox";
import SectionCard from "../components/fragments/SectionCard";
import { Container, Grid } from "../components/styles/Layout";

import { ReactComponent as AdobeXdIcon } from "../images/adobe-xd.svg";
import { ReactComponent as AdobePsIcon } from "../images/adobe-ps.svg";
import { ReactComponent as AdobeAiIcon } from "../images/adobe-ai.svg";
import { ReactComponent as AdobeLrIcon } from "../images/adobe-lr.svg";
import { ReactComponent as AdobeIdIcon } from "../images/adobe-id.svg";
import { ReactComponent as ReactIcon } from "../images/react.svg";
import { ReactComponent as NodejsIcon } from "../images/nodejs.svg";
import { ReactComponent as ServerlessIcon } from "../images/serverless.svg";
import { ReactComponent as AwsIcon } from "../images/aws.svg";
import { ReactComponent as VuejsIcon } from "../images/vuejs.svg";

const Text = styled.p``;
const Acc = styled.p`
  color: ${(props) => props.theme.primary};
  font-weight: 700;
`;

const FrontendIcons = [
  <AdobeXdIcon />,
  <AdobePsIcon />,
  <AdobeAiIcon />,
  <AdobeLrIcon />,
  <AdobeIdIcon />,
];

const WebDevIcons = [
  <ReactIcon style={{ margin: "auto" }} />,
  <VuejsIcon style={{ margin: "auto" }} />,
  <NodejsIcon style={{ margin: "auto" }} />,
  <ServerlessIcon style={{ margin: "auto" }} />,
  <AwsIcon style={{ margin: "auto" }} />,
];

function Services(props) {
  return (
    <>
      <NavBar />
      <PageHeader title="Services" bg={props.theme.gradient4}>
        Erat nam at lectus urna duis. Nunc non blandit massa enim nec. Lacus
        vestibulum sed arcu non odio euismod lacinia. Urna condimentum mattis
        pellentesque id nibh tortor id aliquet. Morbi blandit cursus risus at
        ultrices mi.
      </PageHeader>
      <Container>
        <SectionCard
          title="Frontend design & UX"
          subtitle="Lorem ipsum stuff"
          icons={FrontendIcons}
        >
          <Grid lg={2} gap="2rem">
            <Text>
              <Acc>Design</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Acc>Mobile Ready</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              <Acc>UX</Acc>
              Having a website that is fast is not only a 'nice to have', but it
              also tells something about your business - your business is
              responsive and forward looking. PHP and Wordpress sites are still
              used by most businesses*.
            </Text>
          </Grid>
        </SectionCard>
        <SectionCard
          title="Web Development"
          subtitle="Lorem ipsum stuff"
          icons={WebDevIcons}
        >
          <Grid lg={2} gap="2rem">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Acc>
                From 1-Page Presentation Sites to full Ecommerce and Social
              </Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text>
              <Acc>Content Management & Database</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Grid>
        </SectionCard>
        <SectionCard title="Digital Marketing" subtitle="Lorem ipsum stuff">
          <Grid lg={2} gap="2rem">
            <Text>
              <Acc>Design</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Acc>Mobile Ready</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              <Acc>UX</Acc>
              Having a website that is fast is not only a 'nice to have', but it
              also tells something about your business - your business is
              responsive and forward looking. PHP and Wordpress sites are still
              used by most businesses*.
            </Text>
          </Grid>
        </SectionCard>
        <SectionCard title="Consultancy & Support" subtitle="Lorem ipsum stuff">
          <Grid lg={2} gap="2rem">
            <Text>
              <Acc>Design</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <Acc>Mobile Ready</Acc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
            <Text>
              <Acc>UX</Acc>
              Having a website that is fast is not only a 'nice to have', but it
              also tells something about your business - your business is
              responsive and forward looking. PHP and Wordpress sites are still
              used by most businesses*.
            </Text>
          </Grid>
        </SectionCard>
      </Container>

      <CTABox />
      <Footer />
    </>
  );
}

export default withTheme(Services);
