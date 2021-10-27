import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dash from './dash'

const App = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Dash}/>
            </Switch>
        </Router>  
    )
}

export default App