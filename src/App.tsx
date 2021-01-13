import React, { useState } from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import ModifierProfil from './pages/ModifyProfil';
import Reinitialiser from './pages/ReinitialiserPassword';
import RecuperationEmail from './pages/RecuperationEmail';

import Home from './components/Home';
import ShowFile from './components/File';
import history from './history';
import Dashboard from './components/Dashboard';
import { HeaderBar } from './components/HeaderBar';
import { FooterBar } from './components/FooterBar';
import { getCookie, setCookie } from './utils/cookie';
import { checkToken } from './utils/api';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  checkToken()
    .then(() => setLoaded(true))
    .catch(() => {
      // suppression des cookies + redirection accueil si le token n'est pas bon
      setCookie('token', '', 0);
      setCookie('email', '', 0);
      history.replace('/');
      setLoaded(true);
    });
  // s'il n'y a pas de cookie token, on redirige la personne
  return !getCookie('token') ? (
    <Redirect to='/' />
  ) : // si il a un cookie token et que le token est bon après la réponse serveur on rend le composant demandé
  loaded ? (
    <>
      <HeaderBar.Display />
      <Route {...props} />
      <FooterBar.Display />
    </>
  ) : (
    // on affiche une page d'attente en attendant la réponse
    <>
      <HeaderBar.Display />
      <div style={{ height: '71.4vh' }}>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color='inherit' />
        </Backdrop>
      </div>
      <FooterBar.Display />
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
          <Route exact path='/recuperation-mot-de-passe' component={RecuperationEmail.Display} />
          <Route exact path='/reinitialiser-mot-de-passe/:str' component={Reinitialiser.Display} />
          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
          <ProtectedRoute exact path='/tableau-de-bord' component={Dashboard.Display} />
          <ProtectedRoute exact path='/tableau-de-bord/:file' component={ShowFile.Display} />
          <ProtectedRoute exact path='/profil' component={ModifierProfil.Display} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
