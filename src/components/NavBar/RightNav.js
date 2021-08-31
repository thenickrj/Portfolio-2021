import React from "react";
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
  padding-top: 3.5rem;
  transition: all 0.8s ease-in-out;
  
  li {
    padding: 18px 30px;
    color: white;
  }



`;
function RightNav({ open }) {
  console.log("a", open);

  return (
    <Ul open={open}>
      <div className="nav__menu">
        <li>Home</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>Contact</li>
      </div>
    </Ul>
  );
}

export default RightNav;
