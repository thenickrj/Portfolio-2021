import React from "react";
import styled from "styled-components";

const IntroText = styled.div`
  display: flex;
  background-color: #252839;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #252839;

  .loading {
    position: relative;
    font-size: 2vw;
    color: #01fe87;
    -webkit-text-stroke: 0.3vw #383d52;
    text-transform: uppercase;
  }

  .loading::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #01fe87;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #01fe87;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0;
    }
    70%,
    90% {
      width: 100%;
    }
  }

  #btc {
    width: 150px;
    height: 100px;
    position: absolute;
    right: 5%;
    top: 5%;
    background-image: url("	https://www.udemy.com/staticx/udemy/images/v/logo-coral.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;600;800;900&display=swap");

  * {
    overflow-x: hidden !important;
  }
  #cursor {
    overflow: hidden;
    position: fixed;
    top: 200px;
    left: 200px;
  }
  html {
    cursor: none;
  }
  body {
    width: 100%;
    height: 100vh;
    overflow: hidden !important;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
  }

  #homeSection {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  #textHome {
    overflow: hidden;
  }
  #textHomeSpan {
    display: inline-block;
    transform: translateY(50%);
  }
  #letter {
    display: inline-block;
    z-index: 99;
    margin: 0;
    color: #01fe87;
  }
  .letter0 {
    margin-left: 0.5%;
  }
  .head {
    font-weight: 900;
    font-size: 5em;
    color: #01fe87;
  }
  .body {
    font-size: 1.2em;
  }
  a {
    text-decoration: underline;
    color: inherit;
  }
  #textPosition {
    overflow: hidden;
    position: absolute;
    width: 100%;
    left: 0%;
    top: 15%;
    text-align: center;
    height: 60%;
  }
  #group1 {
    display: inline-block;
  }
  #group2 {
    display: inline-block;
  }
  #group3 {
    display: inline-block;
  }
  #group4 {
    display: inline-block;
  }

  @media only screen and (max-width: 800px) {
    #group1 {
      display: block;
    }
    #group2 {
      display: block;
    }
    #group3 {
      display: block;
    }
    #group4 {
      display: block;
    }

    .body {
      font-size: 0.7em;
    }
    .link {
      font-size: 1em !important;
    }
    .head {
      font-weight: 900;
      font-size: 5em;
    }
    #btc {
      width: 150px;
      height: 100px;
      position: absolute;
      right: 0%;
      top: 2.5%;
      background-image: url("	https://www.udemy.com/staticx/udemy/images/v/logo-coral.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

function Intro() {
  const gsap = window.gsap;

  let tl = gsap.timeline({ ease: "power1.in" });
  function mouseCursor() {
    window.onmousemove = handleMouseMove;
    window.ontouchmove = handleTouchMove;
    function handleMouseMove(e) {
      e = e || window.e;
      document.querySelector("#cursor").style.top = e.clientY + "px";
      document.querySelector("#cursor").style.left = e.clientX + "px";
    }
    function handleTouchMove(e) {
      e = e || window.e;
      document.querySelector("#cursor").style.top = e.touches[0].clientY + "px";
      document.querySelector("#cursor").style.left =
        e.touches[0].clientX + "px";
    }
  }
  mouseCursor();

  function intro() {
    tl.to("#textHomeSpan", {
      y: "0%",
      duration: 1,
      onComplete: () => {
        document.querySelector("#textHome").style.overflow = "visible";
      },
    });
  }
  intro();
  let colors = ["#ff0a0a", "#609aff", "#6510e4", "#ba90fa", "#ffb879"];
  let sizes = [12, -12];
  let randomSize;
  let randomColor;
  let ogColor = "#01fe87";

  let letters = document.querySelectorAll("#letter");

  letters.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        scale: 2,
        onStart: () => {
          gsap.to("#circ", { stroke: colors[randomColor] });
        },
      });
      randomColor = Math.floor(Math.random() * colors.length);
      randomSize = Math.floor(Math.random() * sizes.length);
      gsap.to(element, {
        color: colors[randomColor],
        rotate: sizes[randomSize],
        y: `${sizes[randomSize]}%`,
        duration: 0.5,
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        scale: 1,
        onStart: () => {
          gsap.to("#circ", { stroke: ogColor });
        },
      });
      gsap.to(element, { y: "0%", color: ogColor, rotate: 0, duration: 0.5 });
    });
    element.addEventListener("touchstart", () => {
      gsap.to("#cursor", {
        scale: 2,
        onStart: () => {
          gsap.to("#circ", { stroke: colors[randomColor] });
        },
      });
      randomColor = Math.floor(Math.random() * colors.length);
      randomSize = Math.floor(Math.random() * sizes.length);
      gsap.to(element, {
        color: colors[randomColor],
        rotate: sizes[randomSize],
        y: `${sizes[randomSize]}%`,
        duration: 0.5,
      });
    });
    element.addEventListener("touchend", () => {
      gsap.to("#cursor", {
        scale: 1,
        onStart: () => {
          gsap.to("#circ", { stroke: ogColor });
        },
      });
      gsap.to(element, { y: "0%", color: ogColor, rotate: 0, duration: 0.5 });
    });
  });

  return (
    <div>
      Hi! I'm Nikhil Singh and I'm a Full Stack Developer!
      <IntroText>
        <h2 className="loading" data-text="Hi! I'm Nikhil Singh">
          Hi! I'm Nikhil Singh and
          <br /> I'm a Full Stack Developer!
        </h2>
        <h2 className="loading" data-text="I'm a Full Stack Developer!">
          I'm a Full Stack Developer!
        </h2>
        <svg id="cursor" height="50" width="50">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="black"
            stroke-width="2"
            fill="transparent"
            id="circ"
          />
          {/* <!-- coordinates are in x,y format --> */}
          {/* <!-- points go clockwise around the polygon --> */}
        </svg>
        <div id="homeSection">
          <div id="textPosition" className="left">
            <div id="textHome" className="head">
              <span id="textHomeSpan">
                <div id="group1">
                  <div id="letter" style={{ color: "#01fe87" }}>
                    N
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    I
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    K
                  </div>
                </div>
                <div id="group2">
                  <div
                    id="letter"
                    style={{ color: "#01fe87" }}
                    className="letter0"
                  >
                    H
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    I
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    L
                  </div>
                </div>
                <div id="group3">
                  <div
                    id="letter"
                    style={{ color: "#01fe87" }}
                    className="letter0"
                  >
                    &nbsp; S
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    I
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    N
                  </div>
                </div>
                <div id="group3">
                  <div
                    id="letter"
                    style={{ color: "#01fe87" }}
                    className="letter0"
                  >
                    G
                  </div>
                  <div id="letter" style={{ color: "#01fe87" }}>
                    H
                  </div>
                  {/* <div id="letter">N</div> */}
                </div>
              </span>
            </div>

            <p id="textHome" className="body">
              <span id="textHomeSpan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </p>
            <p id="textHome" className="body">
              <span id="textHomeSpan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </p>
            <p id="textHome" className="body">
              <span id="textHomeSpan">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </span>
            </p>
            <a
              id="textHome"
              className="body link"
              href="https://www.udemy.com/course/javascript-animations-course-with-gsap-and-barbajs/"
              target="_blank"
              rel="noreferrer"
            >
              <span
                id="textHomeSpan"
                // style="text-decoration: underline !important;"
              >
                Explore more
              </span>
            </a>
          </div>
        </div>
      </IntroText>
    </div>
  );
}

export default Intro;
