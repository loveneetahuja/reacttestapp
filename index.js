import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainApp from './components/main.js';
import Home from './components/home.js';
import SecondPage from './components/secondpage.js';

render((

	<Router history={browserHistory}>
		<Route component={MainApp} name="home">
			<Route path="/" component={Home} name="homepage" />
			<Route path="/second" component={SecondPage} name="secondpage" />
		</Route>
	</Router>

	), document.getElementById("main"))