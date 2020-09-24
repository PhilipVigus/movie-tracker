import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
      <main>test</main>
    </>
  );
}

export default App;
