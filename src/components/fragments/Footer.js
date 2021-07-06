import React from "react";

import { ReactComponent as NWDLogo } from "../../images/nwd-dark.svg";

import styled from "styled-components";
import { Container, Grid } from "../styles/Layout";

const Wrapper = styled.div`
  min-height: 3rem;
  background: ${(props) => props.theme.greyMd};
  padding: 2rem 0 0 0;
`;

const Logo = styled(NWDLogo)`
  width: 85%;
`;

const Address = styled.p`
  font-weight: 300;
`;

const Contact = styled.p`
  font-weight: 300;
`;

const Acc = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: 600;
`;

const SmallPrint = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  padding-bottom: 1rem;
`;

const CreditsWrap = styled.div`
  background: ${(props) => props.theme.greyDk};
  color: white;
  font-size: 0.75rem;
  font-weight: 300;
  padding: 0.5rem 0;
`;

const date = new Date();
const Year = date.getFullYear();

function Footer(props) {
  return (
    <Wrapper>
      <Container>
        <Grid lg={3} gap="1rem" style={{ alignItems: "center" }}>
          <Logo />
          <Address>
            Rourke House, Kingsbury Crescent,
            <br />
            Staines-Upon-Thames TW18 3BA
          </Address>
          <Contact>
            <Acc>e:</Acc> info@nwdevelopment.co.uk
            <br />
            <Acc>t:</Acc> +44 (0) 208 488 6010 (Mo-Fri 9am - 1pm)
          </Contact>
        </Grid>
        <SmallPrint>
          New Window Development is part of New Window Marketing Limited.
          Privacy Policy / Terms & Conditions
        </SmallPrint>
      </Container>
      <CreditsWrap>
        <Container>
          Copyright © {Year} New Window Marketing Limited. Company number
          10152936. Registered in England and Wales.
        </Container>
      </CreditsWrap>
    </Wrapper>
  );
}

export default Footer;
