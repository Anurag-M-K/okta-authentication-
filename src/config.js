export const oktaAuthConfig = {
    
    issuer: `${process.env.REACT_APP_OKTA_BASE_URL}/oauth2/default`,
    clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
    redirectUri: `http://localhost:3000/login/callback`,
    scopes: ["openid", "profile", "email"],
    pkce: true
    ,
};