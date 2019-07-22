import React from "react";
import Main from "./Main";
import Admin from "./Admin";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <Main/>
    </div>
  )
}

function About() {
  return (
    <div>
      <Admin/>
    </div>
  );
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">
                Admin
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/users" className="nav-link">
                User
              </Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;
