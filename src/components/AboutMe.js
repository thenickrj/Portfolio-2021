import React from "react";
import { Fade } from "react-reveal";
import DevImg from "../images/developerActivity.svg"
import styled from "styled-components";
import Skills from "./Skills.js"
import "./AboutMe.css";

const Container = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: 20%;
  color:white;
`;

function AboutMe() {
  return (
    <Container>
    <div className="skills-main-div">
      <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="" src={DevImg}></img>
        </div>      
      </Fade>
      <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">About Me 👦 </h1>
          {/* <p className="subTitle skills-text-subtitle">Hey there👋 , I have gcurrently pursuing B.Tech ( Computer Engineering ) . My curiosity levels are as fresh as when I was a child. I believe in eternal learning and deliberate effort as they are the only way to become the smartest in the room . I am a good timekeeper, always willing to learn new skills.</p> */}
          <br/>
          <Skills />
          {/* <div>
            {skillsSection.skills.map(skills => {
              return <p className="subTitle skills-text">{skills}</p>;
            })}
          </div> */}
        </div>
      </Fade>
      </div>
    </Container>
  );
}

export default AboutMe;