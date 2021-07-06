import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Container } from "../styles/Layout";
import { Button, ButtonWrap } from "../styles/Button";

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const Orange = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: 400;
`;

const CenterText = {
  textAlign: "center",
  margin: "6rem auto auto auto",
};

function ContactUsSection(props) {
  return (
    <Container style={CenterText}>
      <Title>
        Today, speed and function is of the essence. <br />{" "}
        <Orange>We deliver.</Orange>
      </Title>
      <ButtonWrap>
        <Link to="/contact">
          <Button primary>Contact Us</Button>
        </Link>
      </ButtonWrap>
      {/* <Link to="/landing">Landing</Link> */}
    </Container>
  );
}

export default ContactUsSection;
