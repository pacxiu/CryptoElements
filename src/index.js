import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './components/registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";

// import Raven from 'raven-js';
// Raven.config('https://37e66868e2bb400fa3fdcef9c3031817@sentry.io/665784').install();

ReactDOM.render(
	<Router>
		<App />
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
