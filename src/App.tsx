import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './pages';
import './styles/index.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Routes.Home} />
                <Route exact path="/works" component={Routes.Works} />
                <Route exact path="/works/:id" component={Routes.WorkDetail} />
                <Route exact path="/contact" component={Routes.Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
