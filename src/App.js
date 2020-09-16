import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Axios from "axios";

function App() {
  const {
    loginWithPopup,
    logout,
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();
  const [response, setResponse] = useState("Not set");

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        });

        console.log(token);
        const api = await Axios.get("/.netlify/functions/me", {
          headers: {
            authorization: "Bearer " + token,
          },
        });

        console.log("here");
        console.log(api);

        const data = {
          status: api.status,
          statusText: api.statusText,
          body: api,
        };

        console.log(data);
        setResponse(data);
      } catch (e) {
        setResponse(e.message);
      }
    };

    if (isAuthenticated) {
      console.log("Getting user profile");
      getUserProfile();
    }
  }, [isAuthenticated, getAccessTokenSilently]);
  console.log(response);
  console.log(response.body);
  return (
    <div>
      <button onClick={() => loginWithPopup()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      {isAuthenticated && <div>{`Authenticated for ${user.nickname}`}</div>}
    </div>
  );
}

export default App;
