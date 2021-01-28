import "./App.css";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  const isAuthorized = false;
  return (
    <>
      <Router>
          {!isAuthorized ? (
            <Redirect to="/login" />
          ) : (
            <Redirect to="/home" />
          )}
        <Switch>
            <Route exact path="/login" component={ Login } />
            <Route exact path="/home" component={ Home } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
