import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { ReactComponent as NWDLogo } from "../images/nwdw.svg";
import { Container } from "../components/styles/Layout";
import { Button } from "../components/styles/Button";

const LandingWrap = styled.div`
  background: linear-gradient(
    0deg,
    rgba(85, 19, 0, 1) 0%,
    rgba(253, 71, 20, 1) 100%
  );
  height: 100vh;
  width: 100%;
  display: table;
`;

const TitleWrap = styled.div`
  padding: 15rem;
`;

const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const Logo = styled(NWDLogo)`
  max-width: 20rem;
`;

function Landing() {
  return (
    <LandingWrap>
      <Container style={{ display: "table-cell", verticalAlign: "middle" }}>
        <TitleWrap>
          <Logo src="/images/logo.svg" />
          <Title>
            Fast, beautiful websites built with the latest and most secure
            frameworks
          </Title>
          <Link to="/">
            <Button primary large>
              Let's get started
            </Button>
          </Link>
        </TitleWrap>
      </Container>
    </LandingWrap>
  );
}

export default Landing;
