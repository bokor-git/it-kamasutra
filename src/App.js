import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Search from "./components/Search/Search";
import Category from "./components/Category/Category";
import People from "./components/People/People";
import Events from "./components/Events/Events";
import Suggestion from "./components/Suggestion/Suggestion";
import Explore from "./components/Explore/Explore";
import MyEvents from "./components/My Events/MyEvents";
import {Route} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {
    return (
            <div className="wrapper">
                <Header/>
                <Profile/>
                <Category/>
                <Search/>
                <People/>
                <div className="wrapper-content">
                    <Route path="/Events" render={() => (<Events store={props.store}/>)}/>
                    <Route path="/Dialogs" render={() => (<DialogsContainer store={props.store}/>)}/>
                    <Route path="/Posts" render={() => (<Posts store={props.store}/>)}/>
                    <Route path="/UsersContainer" render={() => (<UsersContainer store={props.store}/> )}/>
                </div>
                <Suggestion/>
                <Explore/>
                <MyEvents/>
            </div>
    )

}

export default App;


