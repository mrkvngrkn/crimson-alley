import * as React from 'react';
import './app.css';

import Home from './components/pages/home/home';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Home />
      </React.Fragment>
    );
  }
}

export default App;
