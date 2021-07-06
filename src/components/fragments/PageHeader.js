import React from "react";

import styled from "styled-components";
import { ReactComponent as Ornament } from "../../images/header-stripes-bg.svg";
import { Container } from "../styles/Layout";
import Heart from "./Heart";

const HeaderHeight = "20rem";

const Wrapper = styled.div`
  height: ${HeaderHeight};
  min-height: 22rem;
  position: relative;
  /* background: ${(props) => props.theme.gradient2}; */
  background: ${(props) => props.bg};
`;

const Arrows = styled(Ornament)`
  position: absolute;
  height: 108%;
`;

const TitleBg = styled.div`
  height: 3rem;
  position: absolute;
  width: 89vw;
  margin-top: 3.5rem;

  z-index: 2;
  background: #ffffff30;
  backdrop-filter: blur(5px);

  transform: scale(1) rotate(0deg) translate(0px, 0px) skew(35deg, 0deg);
  margin-left: -2rem;
  border-right: 13px ${(props) => props.theme.primary} double;
`;

const Title = styled.h1`
  color: white;
  font-weight: 300;
  letter-spacing: 3px;
`;

const Text = styled.h2`
  color: white;
  width: 85%;
  margin-top: 2.5rem;
`;

const ContainerCustom = styled(Container)`
  z-index: 3;
  left: 50%;
  transform: translate(-50%, 0%);
  position: absolute;
  margin-top: 2.3rem;
`;

function PageHeader(props) {
  return (
    <Wrapper bg={props.bg}>
      <TitleBg />
      <ContainerCustom>
        <Title>{props.title}</Title>
        <Text>{props.children}</Text>
      </ContainerCustom>
      <Arrows />
    </Wrapper>
  );
}

export default PageHeader;
