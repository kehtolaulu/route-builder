import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/app';

const store = createStore(app);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
