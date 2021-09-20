import React from "react";
import emoji from "react-easy-emoji";
import styled from "styled-components";

const skillsSection = {
  title: emoji("About Me 👦"),
  subTitle:
    "Hey, I'm currently pursuing B.Tech ( Computer Engineering ) . My curiosity levels are as fresh as when I was a child. I believe in eternal learning and deliberate effort as they are the only way to become the smartest in the room . I am a good timekeeper, always willing to learn new skills.",

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "logos:react",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "logos:java",
      style: {
        backgroundColor: "transparent",
      },
    },

    {
      skillName: "Html5",
      fontAwesomeClassname: "simple-icons:html5",
      style: {
        backgroundColor: "transparent",
        color: "#c75227",
      },
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "simple-icons:css3",
      style: {
        backgroundColor: "transparent",
        color: "skyblue",
      },
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fa-database",
      style: {
        backgroundColor: "transparent",
        color: "#47A83B",
      },
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "logos:firebase",
      style: {
        backgroundColor: "transparent",
      },
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "simple-icons:react",
      style: {
        color: "#61DAFB",
      },
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fa-server",
      style: {
        backgroundColor: "transparent",
        color: "#34495E",
      },
    },
    {
      skillName: "VScode",
      fontAwesomeClassname: "fa-code",
      style: {
        backgroundColor: "transparent",
        color: "#1495ff",
      },
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fa-github",
      style: {
        backgroundColor: "transparent",
        color: "#ffffff",
      },
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "simple-icons:node-dot-js",
      style: {
        backgroundColor: "transparent",
        color: "#339933",
      },
    },
  ],
};

const Container = styled.div`
  .dev-icons {
    padding-left: 0;
    list-style: none;
    font-size: 3rem;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
  }

  .software-skill-inline {
    display: inline-block;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .software-skill-inline > i {
    color: #868e96;
  }

  .software-skill-inline > i:hover {
    color: #645beb;
  }
  .software-skill-inline > p {
    color: #f2f2f2;
    font-size: 10px;
  }
  .software-skill-inline > i:hover ~ p {
    color: #645beb;
  }
`;

function Skills() {
  return (
    <Container>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills) => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <span
                  className="iconify"
                  data-icon={skills.fontAwesomeClassname}
                  style={skills.style}
                  data-inline="false"
                ></span>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

export default Skills;
