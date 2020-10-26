import React from 'react';
import style from "./App.module.scss";
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import { Route } from 'react-router-dom';
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className={style.content}>
            <Header/>
            <div className={style.container}>
                <Navigation/>
                <Route path={'/Profile'} render={() => <Profile/>}/>
            </div>
        </div>
    );
}

export default App;
