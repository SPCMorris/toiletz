import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Route, Link, RouteHandler} from 'react-router';

export default class DetailsApp extends Component{

	render() {
    return (
   		<div>
       	 <p>"HELLLOOOO from DetailsApp"</p>
        </div>
    );
  }
}

ReactDOM.render(<DetailsApp/>, document.getElementById('app'));
