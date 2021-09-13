import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.nav`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  visibility: ${({ open }) => (open ? "visibile" : "hidden")}; */}
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  left: ${({ open }) => (open ? "0" : "2000px")};
  height: 100vh;
  width: 300px;
  ${"" /* padding-top: 3.5rem; */}
  transition: all 0.8s ease-in-out;
  z-index:999;
  justify-content:space-around;
  
  li {
    padding: 18px 30px;
    color: white;
  }

a{
  text-decoration:none;
  transition: all 0.8s ease-in-out;
  font-size:2em;
  color:white;
}
.links{
  padding:0;
  transition: all 0.4s ease-in-out;
}
.links:hover{
  transform:scale(1.4);
}

`;
function NavItems({ open }) {
  console.log("a", open);

  return (
    <Ul open={open}>
      {/* <div className="nav__menu"> */}
      <Link to="/">
        <li className="links">Home</li>
      </Link>
      <li className="links">
        <Link to="/project">Projects</Link>
      </li>
      <li className="links">
        <Link to="/project">Resume</Link>
      </li>
      <li className="links">
        <Link to="/project">Contact</Link>
      </li>{" "}
      {/* </div> */}
    </Ul>
  );
}

export default NavItems;
