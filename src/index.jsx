import React from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

/* Services */
import registerServiceWorker from './registerServiceWorker';
import HandLink from './libs/handlink';

/* Pages and styles */
import Main from './pages/main';
import './index.scss';

/* Main Render */
const customHistory = createBrowserHistory();
HandLink.connect(customHistory);
ReactDom.render((
    <Router history={customHistory}>
        <Main />
    </Router>
), document.getElementById('root'));

registerServiceWorker();
