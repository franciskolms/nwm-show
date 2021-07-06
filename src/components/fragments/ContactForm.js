import React from "react";

import styled from "styled-components";
import { Button } from "../styles/Button";
import { Container, Grid } from "../styles/Layout";

const Wrapper = styled.div`
  min-height: 20rem;
  background: ${(props) => props.theme.greyLt};
`;

const Form = styled.form`
  padding: 2rem 1rem;
`;

const Input = styled.input`
  height: 2rem;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

const MessageArea = styled.textarea`
  margin: 1rem 0rem;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  height: 12rem;
  width: -webkit-fill-available;
`;

function ContactForm(props) {
  return (
    <Wrapper>
      <Container>
        <Form>
          <Grid lg={3} gap="1rem">
            <Input type="text" placeholder="Name"></Input>
            <Input type="text" placeholder="Email"></Input>
            <Input type="text" placeholder="Phone Number"></Input>
          </Grid>
          <MessageArea placeholder="Message" />
          <Button primary onClick={(e) => e.preventDefault()}>
            Send
          </Button>
        </Form>
      </Container>
    </Wrapper>
  );
}

export default ContactForm;
