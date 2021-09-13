import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  height: 100vh;
  .container__home {
    background: linear-gradient(rgb(167 165 178), rgb(0 0 0));
    ${"" /* background: linear-gradient(rgb(167 165 178), rgb(49 5 91)); */}
    ${"" /* width: 100vh; */}
    ${"" /* height: 100vh; */}
  }

  /*Gallery Css*/

  footer {
    position: absolute;
    width: 120%;
    height: 280px;
    /* Height of the footer */
    background: red;
  }

  .contact-footer {
    position: absolute;
    left: 70%;
    font-family: "Courier New", Courier, monospace;
  }

  .footer_icon {
    position: relative;
    width: 30px;
    margin: 0 26px;
  }

  .flex {
    position: relative;
    display: flex;
    top: 10px;
  }

  footer {
    position: relative;
    width: 100%;
    background-color: black;
  }

  .gal_bio {
    position: relative;
    font-family: "Courier New", Courier, monospace;
    font-size: 30px;
    margin: auto;
    width: 60%;
    text-align: center;
    border: 3px solid #6c755e;
    padding: 10px;
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
    background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
    color: black;
    align-items: center;
    border-radius: 50%;
  }

  .flip-box-back {
    background-color: rgb(113, 176, 238);
    color: white;
    transform: rotateY(180deg);
  }

  .container {
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
    margin: 0;
    /* left: 200px; */
    display: grid;
    grid-template-columns: auto auto auto;
    ${"" /* background-color: red; */}
    grid-gap: 86px;
    padding: 56px;
  }

  .col {
    position: relative;
    width: 90%;
    height: 100%;
    ${"" /* background-color: red; */}
  }

  .cols {
    position: relative;
    display: grid;
    width: 100%;
    margin: auto;
    grid-template-columns: auto auto auto;
    gap: 48px;
    padding: 24px;
    align-items: center;
    left: 5%;
    margin-bottom: 10px;
  }

  h2 {
    font-family: "Courier New", Courier, monospace;
  }

  a {
    text-decoration: none;
  }

  .project_link {
    position: fixed;
    font-size: 32px;
  }

  .project_link:hover {
    background-color: yellow;
    background-size: auto;
  }

  .nav_me {
    position: relative;
    border-radius: 100%;
    height: 350px;
    width: 350px;
    align-items: center;
    left: 25%;
    right: 50%;
  }

  .footer_right_text {
    color: white;
    font-family: "Courier New", Courier, monospace;
    position: relative;
    top: 60px;
    font-size: 15px;
  }

  @media (max-width: 600px) {
    .container {
      position: relative;
      width: auto;
      align-items: center;
      margin: 0;
      /* left: 200px; */
      display: grid;
      grid-template-columns: auto auto;
      background-color: red;
      grid-gap: 86px;
      padding: 56px;
    }

    .col {
      position: relative;
      width: 200%;
      height: 90%;
      background-color: red;
    }

    .cols {
      position: relative;
      display: grid;
      width: 80%;
      grid-template-columns: auto auto;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    footer {
      position: relative;
      width: 100%;
    }

    .nav-options {
      position: relative;
      width: 100%;
    }

    .nav-right {
      position: relative;
      display: none;
    }

    .nav_flexs {
      position: absolute;
      display: flex;
      margin: 10px 0px;
      bottom: 5%;
      left: -4%;
    }

    .headings {
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      display: grid;
      grid-template-columns: 100px;
      padding: 30px;
      gap: 35px;
    }

    .ic {
      position: relative;
      width: 25px;
      left: 35%;
    }

    .gal_res {
      align-items: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }

    .gal_res2 {
      align-items: center;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .dam {
      width: 100%;
      height: 650px;
    }

    .footer_right_text {
      color: white;
      font-family: "Courier New", Courier, monospace;
      position: relative;
      width: 70%;
      top: 60px;
      font-size: 12px;
    }

    .contact-footer {
      color: white;
      font-family: "Courier New", Courier, monospace;
      position: relative;
      width: 50%;
      left: 2%;
      top: 84px;
      font-size: 12px;
    }
  }
`;

function Projects() {
  return (
    <Container>
      {" "}
      {/* <div id="except_nav"> */}
      <div class="col">
        <div class="cols">
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
                  The 🍌 Talk
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://thenickrj.github.io/Banana-Speak/">
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
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
                  {" "}
                  Portfolio with Blog
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="http://www.nikhilsingh.live">Click Here!</a>
                </div>
              </div>
            </div>
          </div>
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
                  Covid Tracker with React
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "20%" }}
                >
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

          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front project4">
                <h2
                  style={{
                    position: "relative",
                    top: "31%",
                    fontSize: "32px",
                    color: "white",
                  }}
                >
                  Todo App
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://socialape-c1285.web.app/">Click Here!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front project5">
                {/* <!--Dexterix-19--> */}
              </div>
              <div class="flip-box-back">
                <h2
                  style={{
                    position: "relative",
                    color: "rgb(224, 224, 51)",
                    top: "20%",
                  }}
                >
                  Nothing Here{" "}
                </h2>
                <div
                  class="project_link"
                  style={{ position: "relative", top: "20%" }}
                ></div>
              </div>
            </div>
          </div>

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
                  Math Quiz CLI{" "}
                </h2>
              </div>
              <div class="flip-box-back">
                <div
                  class="project_link"
                  style={{ position: "relative", top: "32%" }}
                >
                  <a href="https://replit.com/@NikhilSingh17/Lesson-1-CLI-App?v=1">
                    Click Here!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
}

export default Projects;
