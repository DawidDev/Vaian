import React, { useState } from "react";
import styled from "styled-components";

import RightNav from "./RightNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  right: 35px;
  z-index: 3;
  display: none;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#7133EB" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = (props) => {
  const [open, setOpen] = useState(false);
  const closeRwdMenu = () => {setOpen(!open)} // Zamknięcie RWD menu po wybraniu opcji z menu
  const width = props.width // Przypisanie aktualnej szerokości okna przeglądarki 

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav closeRwdMenu={closeRwdMenu} open={open} width={width}/>
    </>
  );
};

export default Burger;
