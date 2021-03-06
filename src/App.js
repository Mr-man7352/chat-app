import React from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import './styles/main.scss';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
