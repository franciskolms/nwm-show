import React from "react";

import styled from "styled-components";

const Wrapper = styled.a`
  /* border: 2px solid ${(props) => props.theme.primary}; */
  border-radius: ${(props) => props.theme.radius};
  background: ${(props) => props.theme.greyLt};
  transition: 0.3s;
  &:hover {
    transform: translate(5%, -2%);
    box-shadow: rgb(4, 54, 69, 1) -1px 1px, rgb(4, 54, 69, 1) -2px 2px,
      rgb(4, 54, 69, 1) -3px 3px, rgb(4, 54, 69, 1) -4px 4px,
      rgb(4, 54, 69, 1) -5px 5px, rgb(4, 54, 69, 1) -6px 6px,
      rgb(4, 54, 69, 1) -7px 7px, rgb(4, 54, 69, 1) -8px 8px;
  }
`;

const Img = styled.img`
  border-radius: ${(props) => props.theme.radius};
  width: 100%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem 0.5rem 0.5rem;
  &:after {
    content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
    margin: 0 3px 0 5px;
  }
`;

function PortfolioCard(props) {
  return (
    <Wrapper href={props.url}>
      <Img src={props.img} />
      <Title>{props.title}</Title>
    </Wrapper>
  );
}

export default PortfolioCard;
