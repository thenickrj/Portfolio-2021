import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: ${({ dark }) => (dark ? "black" : "white")};
  height: 100vh;
  min-height: fit-content;
  .switch {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid black;
  }

  .contain {
    margin: auto;
    position: relative;
    top: 40%;
  }

  h5 {
    margin: 0;
    color: ${({ dark }) => (!dark ? "black" : "white")};
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: white;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px white;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(12px);
    background-color: black;
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

function Blog3() {
  const [dark, setDark] = useState(false);
  return (
    <Container dark={dark}>
      <div className="contain">
        <h5>Dark Mode feature!</h5>
        <label class="switch">
          <input type="checkbox" onChange={(e) => setDark(!dark)} />
          <span class="slider round"></span>
        </label>
      </div>
    </Container>
  );
}

export default Blog3;
