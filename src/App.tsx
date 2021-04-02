import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Routes from './pages'

function App(){
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Routes.Home}/>
				<Route exact path="/works" component={Routes.Works}/>
				<Route exact path="/contact" component={Routes.Contact}/>
			</Switch>
		</BrowserRouter>
	)
}

export default App;
