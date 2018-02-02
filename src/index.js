import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import tnhApp from './services/fun/fun.reducer';
import './index.css';
import {App, AppRouter} from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(tnhApp);

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
