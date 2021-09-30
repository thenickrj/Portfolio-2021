import React from "react";
import styled from "styled-components";

const TextEffect = styled.div`
  ${"" /* background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1)); */}
  @import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');
  ${"" /* @import url("https://fonts.googleapis.com/css?family=Montserrat"); */}
  body {
    background-color: #111;
  }

  .title {
    font-family: "Montserrat";
    text-align: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    letter-spacing: 1px;
  }

  h1 {
    opacity: 0.6;
    background-image: url(https://64.media.tumblr.com/c475372dc160cb01030f2cc3cd84bdfa/tumblr_npqmd9lbGK1s2t3cto1_500.gifv);
    background-size: cover;
    color: transparent;
    -moz-background-clip: text;
    -webkit-background-clip: text;
    text-transform: uppercase;
    font-size: 2em;
    font-weight: 400;
    ${"" /* line-height: 0.75; */}
    margin: 10px 0;
    font-family: "Indie Flower", cursive;
    ${"" /* font-family: "Allison", cursive; */}
  }
  /* styling my button */

  .white-mode {
    text-decoration: none;
    padding: 7px 10px;
    background-color: #122;
    border-radius: 3px;
    color: #fff;
    transition: 0.35s ease-in-out;
    position: absolute;
    left: 15px;
    bottom: 15px;
    font-family: "Montserrat";
  }

  .white-mode:hover {
    background-color: #fff;
    color: #122;
  }
  ${
    "" /* h1 {
    font-family: "Allison", cursive;
  } */
  }
`;

function NameLogo() {
  return (
    <TextEffect>
      <div className="title">
        <h1>
          Nikhil
          {/* <br /> */}
          &nbsp;Singh
          {/* 🎛 */}
        </h1>
      </div>
    </TextEffect>
  );
}

export default NameLogo;
