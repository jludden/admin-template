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
            <div class="wrapper">
              <header class="box main-header">
                  <h1> Welcome to the Hangzhou Dylan Tech demo </h1>
                  <p class="login"><Link to={'/admin/'}> Admin console </Link></p>
              </header>
              <nav class="box main-nav">
              <ul>
                  <li><a href="">Nav 1</a></li>
                  <li><a href="">Nav 2</a></li>
                  <li><a href="">Nav 3</a></li>
              </ul>
              </nav>
              <article class="box content">
                  <h1>Main article area</h1>
                  <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
              </article> 
              <div class="box sidebar">Sidebar</div>
              <footer class="box main-footer">The footer</footer>
            </div>
            )}/>
        </div>
     </Router>
    )
  }
};

export default App;
