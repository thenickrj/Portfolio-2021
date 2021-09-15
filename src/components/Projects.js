import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(rgb(167 165 178), rgb(0 0 0));
  height: auto;
  padding-bottom: 5%;

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
    background: linear-gradient(rgb(14 9 48), rgb(249 9 9));
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
    text-decoration: none;
  }
`;

function Projects() {
  return (
    <Container>
      <br />
      <br />
      <br />
      <div className="project__container">
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
                  Calendar App
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://thenickrj.github.io/Banana-Speak/">
                    Click Here!
                    {/* <img
                      style={{
                        // borderRadius: "50%",
                        width: "60%",
                        height: "80%",
                        // marginBottom: "15%",
                        justifyContent: "center",
                        margin: "auto",
                        position: "relative",
                        top: "25%",
                      }}
                      src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                    /> */}
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
                  Employee Portal
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://employeeportal-app.netlify.app/">
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
                  Movies App
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://confident-pike-12ed13.netlify.app/">
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
                  PicGram
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://picgram-99e7f.web.app/">Click Here!</a>
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
                  <a href="https://thenickrj.github.io/Covid-Tracker/">
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
                  <a href="https://whats-app-clone-e749e.web.app/">
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;
