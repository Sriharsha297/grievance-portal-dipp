import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar"
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import PageNotFound from "../components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <NavBar/>
            <Switch>
                <Route path="/ministry" component={Login} exact/>
                <Route path="/ministry/home" component={Dashboard} exact />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;