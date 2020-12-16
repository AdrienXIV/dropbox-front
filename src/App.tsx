import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import ModifierProfil from './pages/ModifyProfil';
import Home from './components/Home';
import ShowFile from './components/File';
import history from './history';
import Dashboard from './components/Dashboard';
import { HeaderBar } from './components/HeaderBar';
import { FooterBar } from './components/FooterBar';
import { getCookie } from './utils/cookie';

// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => {
  return !getCookie('token') ? (
    <Redirect to='/' />
  ) : (
    <>
      <HeaderBar.Display />
      <Route {...props} />
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
