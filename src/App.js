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
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import EventItem from "./components/Events/Event/EventItem";
import {addPost} from "./Redux/State";


const App = (props) => {
    return (
        <BrowserRouter>
            <div class="wrapper">
                <Header/>
                <Profile/>
                <Category/>
                <Search/>
                <People/>
                <div className="wrapper-content">
             {/*       <Route path="/Events" component={Events}/>
                    <Route path="/Dialogs" component={Dialogs}/>
                    <Route path="/Posts" component={Posts}/>*/}
                    <Route path="/Events" render={()=>(<Events eventData={props.appState.eventData} />)}/>
                    <Route path="/Dialogs" render={()=>(<Dialogs massageData={props.appState.profilePage.massageData} dialogsData={props.appState.profilePage.dialogsData}/>)}/>
                    <Route path="/Posts" render={()=>(<Posts postData={props.appState.postPage.postData} addPost={props.addPost}/>)}/>
                </div>
                <Suggestion/>
                <Explore/>
                <MyEvents/>
            </div>
        </BrowserRouter>

    )

}

export default App;


