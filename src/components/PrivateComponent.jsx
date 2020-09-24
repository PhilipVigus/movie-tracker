import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const PrivateComponent = () => {
  return <div>this is a private component</div>;
};

export default withAuthenticationRequired(PrivateComponent, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
