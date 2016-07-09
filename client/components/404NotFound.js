import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Route, Link, RouteHandler} from 'react-router';

export default class NotFound extends Component{

	render() {
    return (
   		<div>
       	 <p>HELLLOOOO from NotFound</p>
       	 <button><Link to={"/"}>To Index</Link></button>
        </div>
    );
  }
}

ReactDOM.render(<Notfoundp/>, document.getElementById('app'));