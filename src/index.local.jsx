import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';

/* Services */
import registerServiceWorker from './registerServiceWorker';
import HandLink from './libs/handlink';

/* Pages and styles */
import Main from './pages/main';
import './index.scss';

/* Main Render */
ReactDom.render((
    <HashRouter>
        <Main />
    </HashRouter>
), document.getElementById('root'));

registerServiceWorker();
