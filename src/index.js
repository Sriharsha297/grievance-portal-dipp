import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter"
//import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import NavBar from './components/NavBar';

// const store = configureStore();

// const jsx = (
//     <Provider store = {store}>
//         <AppRouter/>
//     </Provider>
// )
ReactDOM.render(<NavBar/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
