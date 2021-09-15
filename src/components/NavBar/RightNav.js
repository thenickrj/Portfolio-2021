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
  background:white;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  left: ${({ open }) => (open ? "0" : "2000px")};
  height: 100vh;
  width: 100%;
  ${"" /* padding-top: 3.5rem; */}
  transition: all 0.8s ease-in-out;
  z-index:1;
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

.nav__menu{
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 300px;
  ${"" /* padding-top: 3.5rem; */}
  z-index:1;
  justify-content:space-around;
}


.nav_right{
  width:100%;
  height:100vh;
  background:linear-gradient(45deg, #0d2538, transparent);
}
`;
function RightNav({ open, setOpen }) {
  console.log("a", open);

  return (
    <Ul open={open}>
      <div className="nav__menu">
        <div>
          <li
            onClick={() => {
              setOpen(false);
            }}
            className="links"
          >
            <Link to="/">Home</Link>
          </li>
        </div>
        <li onClick={() => {
              setOpen(false);
            }} className="links">
          <Link to="/project">Projects</Link>
        </li>
        <li className="links">
          <a href="https://drive.google.com/file/d/1IDSMAOknIh2F0Etzcbk369dsaAmboPpk/view">
            Resume
          </a>
        </li>
        <li className="links">
          <Link to="/project">Contact</Link>
        </li>
      </div>
      <div className="nav_right">
        <h1>Nikhil</h1>
      </div>
    </Ul>
  );
}

export default RightNav;
