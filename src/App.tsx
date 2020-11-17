import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header';
import { Router, Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

import history from './history';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/inscription' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
