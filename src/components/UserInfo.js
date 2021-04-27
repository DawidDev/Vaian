import React, {useContext} from 'react';

import { AppContext } from "../context/AppContext";

const UserInfo = () => {
    const { setLogging, loggedUser } = useContext(AppContext); // name:'', surname:'', age:'', login:'', email:'' }))

    const name = loggedUser.name ? loggedUser.name : ''; 
    const surname = loggedUser.surname ? loggedUser.surname : '';
    const age = loggedUser.age ? loggedUser.age : '';
    const login = loggedUser.login;
    const email = loggedUser.email;
    const paycard = loggedUser.paycard;


    const logout = () => { setLogging(false) }

    //console.log(loggedUser)
    return ( 
        <div className="container-user-info">
            <h3>My account</h3>
            <div className="information">
                <table>
                    <tbody>
                        <tr>
                            <td className="element-info">e-mail: </td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td className="element-info">login: </td>
                            <td>{login}</td>
                        </tr>
                        <tr>
                            <td className="element-info">name: </td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td className="element-info">surname: </td>
                            <td>{surname}</td>
                        </tr>
                        <tr>
                            <td className="element-info">age: </td>
                            <td>{age}</td>
                        </tr>
                        <tr>
                            <td className="element-info">card: </td>
                            <td>{paycard}</td>
                        </tr>     
                    </tbody>
                </table>
                <button id="logout" onClick={logout}>Logout</button>
            </div>
            <div className="avatar">

            </div>
        </div>
     );
}
 
export default UserInfo;