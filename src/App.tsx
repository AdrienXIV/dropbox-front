import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';

import history from './history';

const isConnected = false;

// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => (!isConnected ? <Redirect to='/' /> : <Route {...props} />);

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/inscription' component={Register} />
          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
          <ProtectedRoute exact path='/profil' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
