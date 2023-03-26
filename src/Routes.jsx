import { Route, Switch, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { oktaAuthConfig } from "./config";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const oktaAuth = new OktaAuth(oktaAuthConfig);
console.log("first ", oktaAuth)
const Routes = () => {
    const history = useHistory();


    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        
        history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
    };
    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Navbar />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <SecureRoute path="/profile" component={Profile} />
                <Route path="/login/callback" component={LoginCallback} />
                <Route path="/login" component={Login} />
            </Switch>
        </Security>
    );
};

export default Routes;