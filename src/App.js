import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  const { loginWithPopup, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <header>
        <button onClick={() => loginWithPopup()}>Log In</button>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log Out
        </button>
        {isAuthenticated && <div>{`Authenticated for ${user.nickname}`}</div>}
      </header>
      <main>
        <Link to="/privateComponent">Private</Link>
        <Switch>
          <Route exact path="/privateComponent">
            <PrivateComponent />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
