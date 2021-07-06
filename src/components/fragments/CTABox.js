import React from "react";

import styled from "styled-components";
import { Container } from "../styles/Layout";
import { Button } from "../styles/Button";

const Wrapper = styled.div`
  background: ${(props) => props.theme.greyLt};
`;

const Text = styled.h2`
  font-weight: 300;
`;

const Orange = styled.span`
  color: ${(props) => props.theme.primary};
`;

const Acc = styled.span`
  font-weight: 500;
`;

const TextSmall = styled.span`
  display: block;
  font-size: 1.25rem;
`;

function CTABox() {
  return (
    <Wrapper>
      <Container style={{ padding: "4rem 0 2rem 0", marginTop: "2rem" }}>
        <Button primary>Get Price Estimate</Button>
        <Text>
          Wish to speak to a humanoid before any decisions?
          <br />
          <Orange>
            Call us on <Acc>0208 488 6010</Acc> to discuss your project.
          </Orange>
          <TextSmall>Lines are open Monday to Friday 9am-1pm</TextSmall>
        </Text>
      </Container>
    </Wrapper>
  );
}

export default CTABox;
