import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state from "./Redux/State";
import {allTreeRerender} from "./render";
allTreeRerender(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
