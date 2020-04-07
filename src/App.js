import React from 'react';
import './App.css';
import Profile from "./components/Profile-menu/Profile";
import Search from "./components/Search/Search";
import Category from "./components/Category/Category";
import People from "./components/People/People";
import Suggestion from "./components/Suggestion/Suggestion";
import Explore from "./components/Explore/Explore";
import {Route, withRouter} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/Users/UserProfile/UserProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import EventContainer from "./components/Events/EventContainer";
import MyEventContainer from "./components/MyEvents/MyEventContainer";
import HeaderContainer from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData, singOutThunk} from "./Redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Loading from "./components/common/Conponents/Loading";



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Loading/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer store={this.props.store}/>
                <Profile/>
                <Category/>
                <Search/>
                <People/>
                <div className="wrapper-content">
                    <Route path="/Events" render={() => (<EventContainer/>)}/>
                    <Route path="/Dialogs" render={() => (<DialogsContainer/>)}/>
                    <Route path="/Posts" render={() => (<Posts/>)}/>
                    <Route path="/Users" render={() => (<UsersContainer/>)}/>
                    <Route path="/News" render={() => (<NewsContainer/>)}/>
                    <Route path="/Profile/:userID" render={() => (<UserProfileContainer/>)}/>
                    <Route exact path="/Profile" render={() => (<UserProfileContainer/>)}/>
                    <Route path="/Login" render={() => (<Login/>)}/>
                </div>
                <Suggestion/>
                <Explore/>
                <MyEventContainer store={this.props.store}/>
            </div>
        )

    }
}

const mapStateToProps = (state)=>({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)





