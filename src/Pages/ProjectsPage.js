import React from "react";
import styled from "styled-components";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects";

const Container = styled.div`
  .container__home {
    background: linear-gradient(rgb(167 165 178), rgb(0 0 0));
    ${"" /* background: linear-gradient(rgb(167 165 178), rgb(49 5 91)); */}
    ${"" /* width: 100vh; */}
    ${"" /* height: 100vh; */}
  }
`;

function ProjectsPage() {
  return (
    <Container>
      <div className="container__home">
        <NavBar />
        <Projects />
      </div>
    </Container>
  );
}

export default ProjectsPage;
