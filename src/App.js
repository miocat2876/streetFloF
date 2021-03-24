import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from './routers';


const App = () =>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login"/>
            </Switch>
        </BrowserRouter>
    );
}


export default App;
