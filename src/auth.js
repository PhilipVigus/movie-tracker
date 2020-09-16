import { NetlifyJwtVerifier, claimToArray } from "@serverless-jwt/netlify";

const verifyJwt = NetlifyJwtVerifier({
  issuer: process.env.REACT_APP_AUTH0_DOMAIN,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  mapClaims: (claims) => {
    const user = claims;
    user.scope = claimToArray(user.scope);
    return user;
  },
});

export default verifyJwt;
