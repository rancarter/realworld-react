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
            <Route path={ROUTES.HOME.PATH} exact component={Home} />
            <Route path={ROUTES.LOGIN.PATH} component={Login} />
            <Route path={ROUTES.REGISTER.PATH} component={Register} />
            <Route path={ROUTES.ARTICLE.PATH} component={Article} />
          </div>
        </Router>
    </AuthProvider>
  );
}

export default App;
