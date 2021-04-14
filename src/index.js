import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import Test from './Components/Test'
import HelloComponent from './Components/HelloComponent';

import CreateToDo from './Containers/createTodo'
import Table from './Containers/Table'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer'


// const HelloComponent = () => 
// {
//   return HelloComponent
// }

// class StateFullComponent extends React.Component{
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }

//   ReactDOM.render
//   (<HelloComponent />, 
//     document.getElementById('root'));

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer)
ReactDOM.render(
    <Provider store={store}>
         <CreateToDo />
         <Table />
    </Provider>
, document.getElementById('root'));



// ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<Hello/>, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
