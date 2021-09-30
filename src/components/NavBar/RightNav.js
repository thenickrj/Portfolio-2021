import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import phoneTalk from "../../images/phone_talk.jpg";
import codepen from "../../icons/codepen.png";
import github from "../../icons/github.png";
import gmail from "../../icons/gmail.png";
import instagram from "../../icons/instagram-sketched.png";
import linkedin from "../../icons/linkedin.png";
import devTo from "../../icons/devTo.png";
import twitter from "../../icons/twitter.png";
import { Fade } from "react-reveal";

const Ul = styled.nav`
  position:relative;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  visibility: ${({ open }) => (open ? "visibile" : "hidden")}; */}
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
  font-family: "Poppins", sans-serif;
  color:white;
  flex-direction:row;
  
  li {
    padding: 18px 30px;
    color: white;  
    font-weight: bolder;
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
  ${"" /* position: fixed; */}
  top: 0;
  height: 100vh;
  width: 30%;
  ${"" /* padding-top: 3.5rem; */}
  z-index:1;
  justify-content:space-around;
}

.nav_right{
  width:70%;
  height:100vh;
  background:linear-gradient(45deg, #0d2538, transparent);
}

.phone_talk_img{
  width:25%;
  height:60%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius:15px;
  border:3px solid white;
}

.flex__row{
  display:flex;   
  align-items:center; 
  margin-left:15%;
}

.social_handles{
  width:40px;
  transition: all 0.2s ease-in-out;

}

.social_handles:hover{
  transform: scale(1.2);
  ${
    "" /* border:10px solid #0000004d;
  border-radius:50%; */
  }
}

.social_handles_contain{
  display:flex;
  width:60%;
  margin:auto;
  justify-content:space-around;
}


@media(max-width:700px){
  .nav__menu{
    width:100%;
  }


  .nav_right{
    display:none;
  }
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
        <li
          onClick={() => {
            setOpen(false);
          }}
          className="links"
        >
          <Link to="/project">Projects</Link>
        </li>
        <li className="links">
          <a
            href="https://drive.google.com/file/d/1IDSMAOknIh2F0Etzcbk369dsaAmboPpk/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="links">
          <Link to="/blogs">Blogs</Link>
        </li>
      </div>
      <div className="nav_right">
        <h1>Hey there👋</h1>
        <Fade right duration={1000}>
          <img className="phone_talk_img" src={phoneTalk} alt="" />
        </Fade>
        <div className="flex__col">
          <h2>Contact Me!</h2>
          <div className="social_handles_contain">
            <a
              href="https://github.com/thenickrj"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social_handles" src={github} alt="" />
            </a>
            <a
              href="mailto:nikhilbangalor@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social_handles" src={gmail} alt="" />
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil--singh/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social_handles" src={linkedin} alt="" />
            </a>
            <a
              href="https://twitter.com/TheNickRJ"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social_handles" src={twitter} alt="" />
            </a>
            <a
              href="https://www.instagram.com/thenickrj/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="social_handles" src={instagram} alt="" />
            </a>
            <a href="https://dev.to/thenickrj" target="_blank" rel="noreferrer">
              <img
                style={{ borderRadius: "10px" }}
                className="social_handles"
                src={devTo}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex__row"></div>
      </div>
    </Ul>
  );
}

export default RightNav;
