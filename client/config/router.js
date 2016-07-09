import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

// COMPONENT
import IndexApp from '../components/index.app.js';
import HomeApp from '../components/home.app.js';
import DetailsApp from '../components/details.app.js';
import NotFound from '../components/404NotFound.js';

//login Routes for later
// import LoginForm from ;
// import SignupForm from ;

export default (
	<Router history={hashHistory}>
	    <Route path='/' component={IndexApp} />
	      <IndexRoute component={IndexApp} />
	      <Route path='home' component={HomeApp} />
	      <Route path='details' component={DetailsApp} />
	      <Route path='*' component={NotFound} />
	    </Route>
	</Router>,
app);


