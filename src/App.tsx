import React from 'react';
import style from "./App.module.scss";
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import {Login} from './components/Login/Login';

function App() {
    const isAuthorized = false
    return (
        <div className={style.content}>
            <Header/>
            <div className={style.container}>
                {isAuthorized
                    ? <div>
                        <Navigation/>
                        <Route path={'/Profile'} render={() => <Profile/>}/>
                    </div>
                    : <Login/>
                }
            </div>
        </div>
    );
}

export default App;
