import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  width: 100%;
  max-width: 360px;
  height: auto;

  padding:.4rem;
  ${(props) => (props.small ? `padding: 0` : null)};
  ${(props) => (props.large ? `padding: 1rem 2rem` : null)};

  font-size: 1.2rem;
  ${(props) => (props.small ? `font-size:.9rem` : null)};
  ${(props) => (props.large ? `font-size:1.4rem` : null)};

  background: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};

  border-radius: ${(props) => props.theme.radius};

  font-weight: 600;
  color: #fff;
  border: 0px;
  transition: all 0.14s ease;
  user-select: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    transform: translate(5%, -2%);
    box-shadow: ${(props) =>
      props.primary
        ? "rgb(85,19,0,1) -1px 1px, rgb(85,19,0,1) -2px 2px, rgb(85,19,0,1) -3px 3px, rgb(85,19,0,1) -4px 4px, rgb(85,19,0,1) -5px 5px, rgb(85,19,0,1) -6px 6px, rgb(85,19,0,1) -7px 7px, rgb(85,19,0,1) -8px 8px;"
        : "rgb(4,54,69,1) -1px 1px, rgb(4,54,69,1) -2px 2px, rgb(4,54,69,1) -3px 3px, rgb(4,54,69,1) -4px 4px, rgb(4,54,69,1) -5px 5px, rgb(4,54,69,1) -6px 6px, rgb(4,54,69,1) -7px 7px, rgb(4,54,69,1) -8px 8px;"}

    }
  }
`;

// For the purposes of centering the button and adding some space around it.
export const ButtonWrap = styled.div`
  text-align: center;
  padding-bottom: 4rem;
`;
