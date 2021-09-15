import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyledBurger = styled.div`
  margin: 0;
  width: 3rem;
  height: 3rem;
  padding: 10px;
  position: fixed;
  background-color: black;
  top: 0;
  right: 0;
  display: flex;
  border-radius: 0;
  z-index: 20;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: center;
  ${"" /* gap: 10px; */}

  :hover {
    background-color: #f43d3d;
    ${"" /* transform: scale(1.4); */}
  }

  div {
    ${"" /* margin: 4px; */}
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    align-items: center;
    margin-left: ${({ open }) => (open ? "12px" : "0")};

    &:nth-child(1):hover {
      background-color: ${({ open }) => (open ? "" : "orange")};
    }

    &:nth-child(3):hover {
      background-color: ${({ open }) => (open ? "" : "green")};
    }

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        open={open}
        onClick={() => {
          setOpen(!open);
          console.log(open);
        }}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} />
    </>
  );
}

export default Burger;
