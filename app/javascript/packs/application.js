import 'whatwg-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

import HelloReact from './hello_react';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app');
  if (reactElement) {
    ReactDOM.render(
       <Router history={history}>
        <Route path='/' component={HelloReact} />
       </Router>,
      reactElement
    );
  }
})
