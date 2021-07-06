import React from "react";

import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    10% {transform: scale(1.1)}
`;

const pulsecolor = keyframes`
  10% {background: #dd0000}
`;

const Wrapper = styled.span`
  position: absolute;
  margin: 0.8rem;
  animation: ${pulse} 1s infinite;
`;

const PulsingHeart = styled.span`
  position: relative;
  width: 25px;
  height: 22.5px;
  &:before,
  &:after {
    position: absolute;
    content: "";
    left: 12.5px;
    top: 0;
    width: 12.5px;
    height: 20px;
    background: ${(props) => props.theme.primary};
    border-radius: 25px 25px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
    animation: ${pulsecolor} 1s infinite;
  }
  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
    animation: ${pulsecolor} 1s infinite;
  }
`;

function Heart(props) {
  return (
    <Wrapper>
      <PulsingHeart />
    </Wrapper>
  );
}

export default Heart;
