import React from "react";
import styled from "styled-components";
import nick from "../../images/nikhil.jpg";
const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap");

  margin-top: 15%;

  * {
    margin: 0;
  }

  body,
  html {
    ${"" /* overflow: hidden; */}
  }

  .container_intro_left {
    ${"" /* width: 100%; */}
  }

  .img__border {
    border: 1px solid black;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 5px solid white;
    border-radius: 50%;
  }

  .img__mine {
    position: relative;
    ${"" /* border: 1px solid black; */}
    transition: all 0.8s ease-in-out;
    width: 300px;
    height: 300px;
  }

  .img__mine:hover {
    transform: scale(1.2);
  }

  .container_intro_right {
    ${
      "" /* width: 100%;
    height: 100vh; */
    }
    ${"" /* background: linear-gradient(rgb(49 5 91), rgb(167 165 178)); */}
    ${"" /* opacity: 2; */}
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
    ${"" /* border-radius: 15%; */}

    .box {
      width: 250px;
      height: 250px;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;

      .title {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;

        .block {
          width: 0%;
          height: inherit;
          background: #ffb510;
          position: absolute;
          animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          display: flex;
        }

        h1 {
          font-family: "Poppins";
          color: #ffffff;
          font-size: 3em;
          -webkit-animation: mainFadeIn 2s forwards;
          -o-animation: mainFadeIn 2s forwards;
          animation: mainFadeIn 2s forwards;
          animation-delay: 1.6s;
          opacity: 0;
          display: flex;
          align-items: baseline;
          position: relative;
          white-space: nowrap;

          span {
            width: 0px;
            height: 0px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;

            background: #ffb510;
            -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
              forwards;
            animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
            animation-delay: 2s;
            margin-left: 5px;
            margin-top: -10px;
            position: absolute;
            bottom: 13px;
            right: -12px;
          }
        }
      }

      .role {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        height: 30px;
        margin-top: -10px;

        .block {
          width: 0%;
          height: inherit;
          background: #e91e63;
          position: absolute;
          animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          display: flex;
        }

        p {
          animation: secFadeIn 2s forwards;
          animation-delay: 3.2s;
          opacity: 0;
          font-weight: 400;
          font-family: "Lato";
          color: #ffffff;
          font-size: 2em;
          text-transform: uppercase;
          ${"" /* letter-spacing: 5px; */}
          white-space: nowrap;
        }
      }
    }
  }

  @keyframes mainBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes secBlock {
    0% {
      width: 0%;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes mainFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes popIn {
    0% {
      width: 0px;
      height: 0px;
      background: #e9d856;
      border: 0px solid #ddd;
      opacity: 0;
    }
    50% {
      width: 10px;
      height: 10px;
      background: #e9d856;
      opacity: 1;
      bottom: 45px;
    }
    65% {
      width: 7px;
      height: 7px;
      bottom: 0px;
      width: 15px;
    }
    80% {
      width: 10px;
      height: 10px;
      bottom: 20px;
    }
    100% {
      width: 7px;
      height: 7px;
      background: #e9d856;
      border: 0px solid #222;
      bottom: 13px;
    }
  }

  @keyframes secFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }

  footer {
    width: 350px;
    height: 80px;
    background: #ffb510;
    position: absolute;
    right: 0;
    bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: top 0.8s forwards;
    animation-delay: 4s;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #232323;
      font-family: "Poppins";

      i {
        margin-right: 25px;
        font-size: 22px;
        color: #232323;
        animation: icon 2s forwards;
        animation-delay: 4s;
        opacity: 0;
      }
    }
  }

  @keyframes top {
    0% {
      opacity: 0;
      bottom: -80px;
    }
    100% {
      opacity: 1;
      bottom: 0px;
    }
  }

  @keyframes icon {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1.3) rotate(-02deg);
    }
    100% {
      opacity: 1;
      bottom: 0px;
    }
  }

  @media (max-width: 840px) {
    .container_intro {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

function Intro() {
  return (
    <Container>
      <div
        className="container_intro"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div className="container_intro_left">
          <div className="img__border">
            <img className="img__mine" src={nick} alt="" />
          </div>
        </div>
        <div class="container_intro_right">
          <div class="box">
            <div class="title">
              <span class="block"></span>
              <h1>
                Nikhil Singh<span></span>
              </h1>
            </div>
            <hr />
            <br />
            <div class="role">
              <div class="block"></div>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Intro;
