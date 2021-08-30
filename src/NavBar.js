import React, { useState } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import RightNav from "./RightNav";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

function NavBar() {
  const [check, setCheck] = useState(false);
  function here() {
    setCheck(!check);
  }
  return (
    <Nav>
      <div className="logo">Nav Bar</div>
      <Burger />
      <RightNav />
      {/* <h5 onClick={here}>CLick here!!</h5> */}
      {/* {check && <div className="navB">Nav bar</div>} */}
    </Nav>
  );
}

export default NavBar;
