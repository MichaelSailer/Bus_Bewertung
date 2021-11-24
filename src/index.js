import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';


import QuestionReducer from './store/reducers/Question'

const rootReducer = combineReducers({
  questions: QuestionReducer,
})

const composeEnhancers =  (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


const app = (
  <Provider store={store}>
  <App/>
</Provider>
)

ReactDOM.render(app,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
