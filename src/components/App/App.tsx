import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Articles from '../Articles/Articles';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Articles} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
