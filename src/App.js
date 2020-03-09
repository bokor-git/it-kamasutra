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
import Weather from "./components/Weather/Weather";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Massages from "./components/Massages/Massages";



const App = (dialogElement, massageData) => {
    return (
        <BrowserRouter>
            <div class="wrapper">
                <Header/>
                <Profile/>
                <Category/>
                <Search/>
                <People/>
                <div className="wrapper-content">
                    <Route path="/Events" component={Events}/>
                    <Route path="/Dialogs" component={Dialogs}/>
                    <Route path="/Massages" component={Massages}/>
                </div>
                <Suggestion/>
                <Explore/>
                <Weather/>
            </div>
        </BrowserRouter>

    )

}

export default App;


