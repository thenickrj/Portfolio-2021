import React from "react";
import styled from "styled-components";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro/Intro";
import NavBar from "../components/NavBar/NavBar";

const Container = styled.div`
  .container__home {
    background: linear-gradient(rgb(167 165 178), rgb(0 0 0));
    height: fit-content;
    ${"" /* background: linear-gradient(rgb(167 165 178), rgb(49 5 91)); */}
    ${"" /* width: 100vh; */}
    ${"" /* height: 100vh; */}
  }
`;

function Home() {
  return (
    <Container>
      <div className="container__home">
        <NavBar />
        <Intro />
        <AboutMe />
      </div>
    </Container>
  );
}

export default Home;
