import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

// Import components application to render in component
import Home from '../pages/Home'
import New from '../pages/New'
import Catalogue from '../pages/Catalogue'
import Card from '../pages/Card'
import MyAccount from '../pages/MyAccount'
import Search from '../pages/Search'  
import SelectedMovie from '../pages/SelectedMovie'  

// Create page when page is not found
const ErrorPage = () => (
    <>
        Page is not found.
    </>
)



const Content = () => {
    return ( 
        <>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
            <Route path="/catalogue" exact component={Catalogue} />
            <Route path="/card" exact component={Card} />
            <Route path="/myaccount" exact component={MyAccount} />
            <Route path="/search" exact component={Search} />
            <Route path="/catalogue/:id" component={SelectedMovie} />
            <Route path="/" component={ErrorPage} />
        </Switch>
        </>
     );
}
 
export default Content;
