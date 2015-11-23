import React  from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

var App = React.createClass({
  render: function(){
    return(
      <div>Hello World</div>
    );
  }
});

/*
  Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={App}/>
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
