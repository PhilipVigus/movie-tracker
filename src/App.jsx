import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  const {
    loginWithPopup,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });

        console.log(token);
      } catch (e) {
        console.error(e);
      }
    };

    if (isAuthenticated) {
      getData();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  return (
    <>
      <header>
        <button type="button" onClick={() => loginWithPopup()}>
          Log In
        </button>
        <button
          type="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
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
