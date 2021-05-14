import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Profile from "./Profile";
import Database from "./Database";

function App() {
  return (
    // <div className="App">
    /* <Login /> */
    /* <Dashboard /> */
    // <Profile />
    /* <Database /> */
    /* </div> */
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} exact={true} />
          <Route path="/database" component={Database} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
