import 'whatwg-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom'

import Chat from '../react/components/Chat';
import SignIn from '../react/components/SignIn';

const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app');
  if (reactElement) {
    ReactDOM.render(
       <BrowserRouter history={history}>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route path='/chat' component={Chat} />
        </Switch>
       </BrowserRouter>,
      reactElement
    );
  }
})
