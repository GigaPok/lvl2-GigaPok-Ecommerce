import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Colors from './components/Color';
import MainPage from './pages/MainPage';
import SinglePage from './pages/SinglePage';

const SiteRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <Colors></Colors>
                </Route>
                <Route path="/single/:id">
                    <SinglePage></SinglePage>
                </Route>
                <Route path="/">
                    <MainPage></MainPage>
                </Route>
            </Switch>
        </Router>

    );
};

export default SiteRouter;