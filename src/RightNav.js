import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;

    li {
      color: #fff;
    }
  }
`;
function RightNav() {
  return (
    <Ul>
      <li>Home</li>
      <li>Home1</li>
      <li>Home2</li>
      <li>Home4</li>
    </Ul>
  );
}

export default RightNav;
