import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import { NavLink } from 'react-router-dom'

import '../style/Navigation.css';

// Importing components
import Burger from "../components/Burger";

// Importing additionals libraries.
// React-resize-detector - obsługa zmiany szerokości widoku dla pokazania inputa w nawigacji
import { useResizeDetector } from 'react-resize-detector';

const Nav = styled.nav`
  width: 100%;
  height: 95px;
  padding: 0 20 px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  max-width: 1400px;
`;

const Navigation = () => {

    // Obsługa dodawania dodatkowego stylu dla nawigacji przy evencie scroll
    const [decisionForNavStyle, setDecisionForNavStyle] = useState(Boolean);

    useEffect(() => {
      window.onscroll = () => {
        const number = Math.floor(window.pageYOffset)
        //console.log(number)
        if(number > 300){
            if(decisionForNavStyle === false) return setDecisionForNavStyle(true)
        }
        else if(number < 300) {
            if(decisionForNavStyle === true) return setDecisionForNavStyle(false)
        }
      }
    }, [decisionForNavStyle]);
    //console.log(decisionForNavStyle)

    const styleNoScroll = { 
        background: "linear-gradient(0deg, rgba(24,24,16,0) 1%, rgba(24,24,16,1) 100%)" }
    const styleScroll = { 
        background: "linear-gradient(0deg, rgba(24,24,16,0) 1%, rgba(24,24,16,1) 40%)",
    }

    // Pobranie aktualnej szerokości przeglądarki. Tak długo będzie pobierane jak długo będzie istniał komponent Nav
    const { width, ref } = useResizeDetector();
    return ( 
        <div className="navigation-bar" style={ decisionForNavStyle ? styleScroll : styleNoScroll }>
            <Nav ref={ref}>
                <div className="logo"><NavLink to="/" exact={true}>VAIAN</NavLink></div>
                <Burger width={width}/>
            </Nav>
        </div>
     );
}
 
export default Navigation;
























/*

const NavList = () => {
    return(
        <ul>
            <li>
                <NavLink to="/" exact={true}>Home</NavLink> 
                <NavLink to="/new" exact={true}>New</NavLink> 
                <NavLink to="/catalogue" exact={true}>Catalogue</NavLink> 
                <NavLink to="/card" exact={true}>Card</NavLink> 
                <NavLink to="/myaccount" exact={true}>My acount</NavLink> 
            </li>
        </ul>
    )
}

*/