import React from "react";
import styled from "styled-components";
import NameLogo from "../Intro/NameLogo";
import Burger from "./Burger";
import RightNav from "./RightNav";

const Nav = styled.nav`
  position: relative;
  width: 100%;
  ${"" /* height: 65px; */}
  ${"" /* border-bottom: 2px solid #f1f1f1f1; */}
  display: flex;
  ${"" /* padding: 0 20px; */}
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  li {
    padding: 18px 30px;
  }
`;
const Container = styled.div`
  .name__container {
    display: block;
    bottom: 45%;
    position: fixed;
    left: 2%;
    z-index: 0;
  }
`;
function NavBar() {
  return (
    <Container>
      <Nav>
        <Burger />
      </Nav>
      <div className="name__container">
        <NameLogo />
      </div>
    </Container>
  );
}

export default NavBar;
