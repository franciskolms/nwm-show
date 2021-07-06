import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { ReactComponent as NWDLogo } from "../../images/nwd-light.svg";
import { Container, Grid } from "../styles/Layout";
import { Button } from "../styles/Button";

const StickToTop = styled.div`
  display: block;
  position: relative;
`;

const NavBarWrap = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Logo = styled(NWDLogo)`
  margin: auto;
`;

const MenuItem = styled.li`
  list-style-type: none;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.85rem;
  margin: 0.2rem;
  padding: 0.2rem;
  transition: 0.3s;
  color: white;
  border-radius: ${(props) => props.theme.radius};
  &:hover {
    background: ${(props) => props.theme.secondary};
    color: white;
  }
`;

const MenuItems = [
  { title: "Home", link: "/" },
  { title: "Why Us?", link: "/whyus" },
  { title: "Services", link: "/services" },
  { title: "Recent Work", link: "/portfolio" },
  { title: "Contact", link: "/contact" },
];

const ListMenuItems = MenuItems.map((item, index) => (
  <MenuItem key={index}>
    <Link to={item.link}>{item.title}</Link>
  </MenuItem>
));

function NavBar() {
  return (
    <StickToTop>
      <NavBarWrap>
        <Container>
          <Grid
            custom={"1.3fr 5fr 1fr"}
            gap={"2rem"}
            style={{ minHeight: "3.5rem" }}
          >
            <Logo src="/images/nwd.svg" />
            <Grid lg={MenuItems.length} style={{ alignContent: "center" }} auto>
              {ListMenuItems}
            </Grid>
            <Button
              primary
              small
              style={{ height: "2rem", marginTop: ".7rem" }}
            >
              Get A Quote
            </Button>
          </Grid>
        </Container>
      </NavBarWrap>
    </StickToTop>
  );
}

export default NavBar;
