import React, { useContext, useState } from 'react';

import  '../style/MyAccount.css';

import { AppContext } from "../context/AppContext";

const Login = ({ usersAccounts}) => {
    const { isLogged, setLogging, settingInfoUser } = useContext(AppContext);

    const [login, setLogin] = useState("") 
    const [password, setPassword] = useState("") 

    // Informacja o błędnym logowaniu pokazywana w DOM
    const [problemInfo, setProblemInfo] = useState("")

    // Obsługa potwierdzenia formularza logowania
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        usersAccounts.filter(item => {
            if(item.login === login && item.password === password){
              setLogging(true); // Ustawianie info czy zalogowany w Context
              const {name, surname, age, login, email, paycard } = item;
              const objUser = {name, surname, age, login, email, paycard} 
               // Ustawianie w Context danych o aktualnie zalogowanym użytkowniku
              return settingInfoUser(objUser)
            }
            else return setProblemInfo("Small mistake? Try again.")
        })
        // Czyszczenie zawartości formularza logowania
        setLogin('');
        setPassword('');

    }

    // Obsługa przypisania wartości logowania do state (useState)
    const handleFormLoging = (e) => {
        setProblemInfo("")
        const name = e.target.name;
        const value = e.target.value;
        if (name === "login") setLogin(value)
        else if (name === "password") setPassword(value)
    }

    return ( 
        <div className="login-form" >
            <form onSubmit={handleSubmit}>
                <input onChange={handleFormLoging} type="text" name="login" placeholder="login" value={login}></input>
                <input onChange={handleFormLoging} type="password" name="password" placeholder="password" value={password}></input>
                <button id="login">Login</button>
                <br/>
                {problemInfo}
            </form>
            <p>Do you want register now? <a href="#">Click here</a></p>
        </div>
     );
}
 
export default Login;