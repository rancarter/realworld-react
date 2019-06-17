import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from '../constants';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path={ROUTES.HOME.PATH} exact component={Home} />
          <Route path={ROUTES.LOGIN.PATH} component={Login} />
          <Route path={ROUTES.REGISTER.PATH} component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
