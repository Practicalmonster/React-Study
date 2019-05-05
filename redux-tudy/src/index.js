import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Redux from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './components/store/reducer'
const Appstore = Redux.createStore(reducer);


console.log("this is your current state",Appstore.getState())
ReactDOM.render(

<Provider store={Appstore}>
    <App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
