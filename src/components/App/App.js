import React from 'react';
import './App.css';
import StarMatch from "../game/StartMatch/StartMatch";
import Header from "../common/Header";
import {Route, Switch} from "react-router-dom";
import PageNotFound from "../common/PageNotFound"
import TutorialPage from "../tutorial/TutorialPage"


const App = () => {
    return (
        <>
            <Route component={Header}/>
            <div className="jumbotron bg-white">
                <Switch>
                    <Route exact path="/" component={StarMatch}/>
                    <Route path="/tutorial" component={TutorialPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </>
    )
        ;
}

export default App;
