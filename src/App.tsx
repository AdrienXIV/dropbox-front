import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Home from './components/Home';
<<<<<<< HEAD
import { HeaderBar } from './components/HeaderBar';
import history from './history';
import { getCookie } from './utils/cookie';
=======
import File from './components/File';

import history from './history';
import Profile from './components/Profile';
import { Filter1TwoTone } from '@material-ui/icons';

const isConnected = false;
>>>>>>> 2b375b20882c15899594cd7e5d2b016404b5af85

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
<<<<<<< HEAD
          <Route exact path='/inscription' component={Register.Display} />
=======
          <Route exact path='/inscription' component={Register} />
          <Route exact path='/profil' component={Profile.Display} />
          <Route exact path='/profil/:file' component={File.Display} />
>>>>>>> 2b375b20882c15899594cd7e5d2b016404b5af85
          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
