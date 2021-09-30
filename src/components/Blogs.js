import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(rgb(167 165 178), rgb(0 0 0));
  height: auto;
  min-height: 100vh;
  padding-bottom: 5%;
  font-family: "Poppins", sans-serif;

  :root {
    --colorMain: #c0c0c0;
    --brShadow: -6px 6px 15px rgba(0, 0, 0, 0.5);
    --tlShadow: 6px -6px 15px rgba(255, 255, 255, 0.8);
  }

  .heading {
    color: #d0cdcd;
    justify-content: center;
    ${"" /* background: #c0c0c0; */}
    font-size: 60px;
    font-weight: bold;
    letter-spacing: 2px;
    ${"" /* font-family: sans-serif; */}
    ${"" /* text-transform: uppercase; */}
    text-shadow: -6px 6px 15px rgba(0, 0, 0, 0.5),
      -6px 6px 15px rgba(0, 0, 0, 0.5);
    position: relative;

    &::before,
    &::after {
      position: absolute;
      background: #c0c0c0;
      content: "";
      border-radius: 10%;
    }

    ${
      "" /* &::before {
      left: 0;
      width: 100px;
      height: 100px;
      top: -150px;
      z-index: 10;
      box-shadow: inset -6px 6px 15px rgba(0, 0, 0, 0.5),
        inset -6px 6px 15px rgba(0, 0, 0, 0.5);
    } */
    }
    ${
      "" /* &::after {
      left: -50px;
      width: 200px;
      height: 200px;
      top: -200px;
      box-shadow: -6px 6px 15px rgba(0, 0, 0, 0.5),
        -6px 6px 15px rgba(0, 0, 0, 0.5);
    } */
    }
  }
  ${
    "" /* .heading {
    font-size: 72px;
    background: -webkit-linear-gradient(#8f00ff, #e00bbe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 5%;
  } */
  }
  .project__container {
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .card {
    ${"" /* background-color: dodgerblue; */}
    color: white;
    padding: 1rem;
    height: 18rem;
    margin: auto;
  }
  .flip-box {
    position: relative;
    background-color: transparerent;
    width: 300px;
    height: 300px;
    /* border: 1px solid #f1f1f1; */
    perspective: 700px;
  }

  .flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
    padding-bottom: 5%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-box:hover .flip-box-inner {
    transform: rotateY(180deg);
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 15px;
  }

  .flip-box-front {
    /* background-image: url("https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"); */
    background: linear-gradient(rgb(14 9 48), rgb(0 128 255));
    color: black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    align-items: center;
    border-radius: 50%;
  }

  .flip-box-back {
    background: linear-gradient(rgb(255 255 255), rgb(166 165 173));
    ${"" /* background-color: rgb(113, 176, 238); */}
    color: white;
    transform: rotateY(180deg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 50%;
    border: 2px solid black;
  }
  .project_link {
    position: fixed;
    font-size: 32px;
  }

  .project_link:hover {
    ${"" /* background: linear-gradient(rgb(255 255 255), rgb(166 165 173)); */}
    ${"" /* background-size: auto; */}
  }

  h2 {
    font-family: "Courier New", Courier, monospace;
  }
  a {
    pointer: cursor;
    text-decoration: none;
    font-weight: 400;
  }

  a:hover {
    color: red;
  }
  button {
    font-size: 32px;
    border: none;
    background: none;
  }
`;

function Blogs() {
  return (
    <Container>
      <br />
      <br />
      <h1 className="heading">Blogs</h1>
      <div className="project__container">
        <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "25%",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Dark Mode: Conditional Styling using styled-components
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://dev.to/thenickrj/dark-mode-conditional-styling-using-styled-components-4dm3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "25%",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Create Your First React Native App and run it in your phone
                  under 5 minutes
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://thenickrj.medium.com/create-your-first-react-native-app-and-run-it-in-your-phone-under-5-minutes-91fa1886dc62"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "25%",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  My Internship Experience at a Startup
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://thenickrj.medium.com/my-internship-experience-at-a-startup-539b582c88ce"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "31%",
                    fontSize: "32px",
                    color: "white",
                  }}
                >
                  PicGram
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://picgram-99e7f.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "31%",
                    fontSize: "32px",
                    color: "white",
                  }}
                >
                  Covid Tracker
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://thenickrj.github.io/Covid-Tracker/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <h2
                  style={{
                    position: "relative",
                    top: "31%",
                    fontSize: "32px",
                    color: "white",
                  }}
                >
                  Chat App
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a
                    href="https://whats-app-clone-e749e.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </Container>
  );
}

export default Blogs;
