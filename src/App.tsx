import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Activity from './pages/Activity';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/activity" component={Activity} />
      </Switch>
    </Router>
  );
};

export default App;