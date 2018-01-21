import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import Book from './components/book/BookPage'
import App from './components/App'

const routes = (
  <Route path="/" component={App}>
    <Route path="/about" component={About} />
    <Route path="/books" component={Book} />
    <Route path="*" component={NoMatch} />
  </Route>
)

export default routes