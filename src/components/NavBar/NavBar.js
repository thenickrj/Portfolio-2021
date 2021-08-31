import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import RightNav from "./RightNav";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1f1;
  display: flex;
  ${"" /* padding: 0 20px; */}
  justify-content: space-between;

  li {
    padding: 18px 30px;
  }
`;
function NavBar() {
  return (
    <Nav>
      <Burger />
    </Nav>
  );
}

export default NavBar;
