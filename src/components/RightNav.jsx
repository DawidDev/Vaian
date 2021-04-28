import React, {useContext} from "react";
import styled from "styled-components";

import { NavLink, useHistory } from 'react-router-dom';

import { AppContext } from "../context/AppContext";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  max-width: 800px;
  width: 100%;
  z-index: 2;

  li {
    padding: 18px 10px;
    text-decoration: none;
    transition: 0.5;
  }
  li a {
    text-decoration: none;
    color: white;
    padding: 10px 0;
  }

  li a.active {
    border-bottom: 1px solid #7133EB;
    color: #7133EB;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    z-index: 2;
    flex-flow: column nowrap;
    list-style: none;
    background-color: #181818;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    padding-bottom: 5rem;
    transition: transform 0.3s ease-in-out;
    font-size: 45px;

    li a{
      color: white;
    }
  }
`;


const RightNav = ({ open, width, closeRwdMenu }) => {

   // Praca z ReactContext. Pobranie funkcji i przekazanie wartości wyszukiwanej do contextu.
   const { typpingSearchText, isLogged, loggedUser } = useContext(AppContext);
   const history = useHistory()
   const fnk = (e) => {
     const inputText = e.target.value;
     typpingSearchText(inputText)  
     inputText.length > 0 ? history.push('/search') : history.push('/') // Renderowanie treści w zależności od wyszukiwania.
     console.log(`Wyszukuje ${inputText}`)
   }

    // Obsługa pokazania input(wyszukiwanie) w nawigacji w zależności od szerokości okna przeglądarki.
    const input = <input onChange={fnk} class="input-search" type="text" placeholder="search"></input>
    const inputForBigWidth = width > 768 ? <li>{input}</li> : null;
    const inputForSmallWidth = width <= 768 ? input : null;

    const accountLinkTitle = isLogged ? loggedUser.name : 'Account'
  return (
      <>
        {inputForSmallWidth}
        <Ul open={open}>
            <li onClick={closeRwdMenu}><NavLink to="/" exact={true}>Home</NavLink> </li>
            <li onClick={closeRwdMenu}><NavLink to="/new" exact={true}>New</NavLink> </li>
            <li onClick={closeRwdMenu}><NavLink to="/catalogue" exact={true}>Catalogue</NavLink> </li>
            <li onClick={closeRwdMenu}><NavLink to="/card" exact={true}>Card</NavLink>  </li>
            {inputForBigWidth}
            <li onClick={closeRwdMenu}><NavLink to="/myaccount" exact={true}>{accountLinkTitle}</NavLink> </li>
        </Ul>
      </>
  );
};

export default RightNav;


// Przydatny hook //useHistory.push("/new"); i .goBack()