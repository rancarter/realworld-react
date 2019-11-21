import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ROUTES } from '../constants';
import { AuthProvider } from '../context/authContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Article from './Article';

const App: React.FC = () => {
  return (
    <AuthProvider>
        <Router>
          <div className="App">
            <Header />
            <Route path={ROUTES.home} exact component={Home} />
            <Route path={ROUTES.login} component={Login} />
            <Route path={ROUTES.register} component={Register} />
            <Route path={ROUTES.article} component={Article} />
          </div>
        </Router>
    </AuthProvider>
  );
}

export default App;
