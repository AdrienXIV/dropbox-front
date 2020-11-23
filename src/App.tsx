import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './pages/Register';
import Home from './components/Home';
import File from './components/File';

import history from './history';
import Profile from './components/Profile';
import { Filter1TwoTone } from '@material-ui/icons';

const isConnected = false;

// si la personne n'est pas connectée, on la redirige vers l'inscription
const ProtectedRoute = ({ ...props }) => (!isConnected ? <Redirect to='/' /> : <Route {...props} />);

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home.Display} />
          <Route exact path='/inscription' component={Register} />
          <Route exact path='/profil' component={Profile.Display} />
          <Route exact path='/profil/:file' component={File.Display} />
          {/* ROUTES NECESSITANT D'ETRE CONNECTE */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
