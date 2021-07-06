import React from "react";

import styled, { withTheme } from "styled-components";

import NavBar from "../components/fragments/NavBar";
import PageHeader from "../components/fragments/PageHeader";
import ContactForm from "../components/fragments/ContactForm";
import Footer from "../components/fragments/Footer";

import CTABox from "../components/fragments/CTABox";
import { Container } from "../components/styles/Layout";

function Contact(props) {
  return (
    <>
      <NavBar />
      <PageHeader title="Contact" bg={props.theme.gradient2}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </PageHeader>
      <ContactForm />
      <Footer />
    </>
  );
}

export default withTheme(Contact);
