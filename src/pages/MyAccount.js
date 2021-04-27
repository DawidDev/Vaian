import React, {useContext } from 'react';
import  '../style/MyAccount.css';

import { AppContext } from "../context/AppContext";

import Login from '../components/Login'
import UserInfo from '../components/UserInfo'



// Symulacja istnienia kont użytkowników w bazie danych (useState({ name:'', surname:'', age:'', login:'', email:'' }))
const usersAccounts = [
    {
        name: "User",
        surname: "UserSurname",
        age: 23,
        login: "user",
        password: "user",
        email: "user@gmail.com",
        paycard: "***********5698",
    }
]

const MyAccount = () => {
    const { isLogged } = useContext(AppContext);

    return ( 
        <div className="container-account">
            {isLogged ? <UserInfo /> : <Login usersAccounts={usersAccounts} />}
        </div>
     );
}
 
export default MyAccount;