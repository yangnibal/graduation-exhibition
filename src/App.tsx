import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Routes from './pages';
import Content from './pages/Works/Detail/';
import './styles/index.css';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {/*<Route exact path="/" component={Routes.Home} />*/}
                <Route exact path="/" component={Routes.Landing} />
                <Route exact path="/works" component={Routes.Works} />
                <Route exact path="/works/:id" component={Content} />
                <Route exact path="/contact" component={Routes.Contact} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
