import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css'
import tnhApp from './services/fun/fun.reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(tnhApp);

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
