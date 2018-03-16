import React, {Component } from "react";
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { adminConsole } from './adminConsole'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/admin/" component={adminConsole}/>
          <Route exact={true} path="/" render={() => (
            <div>
              <h1> Welcome to the Hangzhou Dylan Tech demo </h1>
              <Link to={'/admin/'}> Admin console </Link>
            </div>)}/>
        </div>
     </Router>
    )
  }
};

export default App;
