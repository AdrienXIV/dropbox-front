import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Home from './components/Home';
import { HeaderBar } from './components/HeaderBar';
import history from './history';
import { getCookie } from './utils/cookie';

// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => {
  console.log('cookie', getCookie('token'));
  return !getCookie('token') ? (
    <Redirect to='/' />
  ) : (
    <>
      <HeaderBar.Display />
      <Route {...props} />
    </>
  );
};

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home.Display} />
          <Route exact path='/inscription' component={Register.Display} />
          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
          <ProtectedRoute exact path='/profil' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
