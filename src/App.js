import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/index.jsx";
import NotFound from './Pages/404';
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";

const Contact = lazy(() => import("./Pages/Contact"));

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Home myname="Rishabh" />} />
            <Route exact
              path="/about"
              render={() => (
                <Layout>
                  <React.Fragment>
                    <p>Hello</p>
                    <p></p>
                  </React.Fragment>
                </Layout>
              )}
            />
            <Route path='/404' exact render={() => <NotFound />} />
            <Route exact path='/contact' render={() => <Suspense fallback={<p>Loading...</p>}><Contact /></Suspense> } />
            <Route exact path='/dashboard'render={() => <Dashboard />} />
            <Route path='/users/:id' render={({match}) => <Users id={match.params.id} />} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
