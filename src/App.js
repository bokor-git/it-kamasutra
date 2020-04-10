import React from 'react';
import './App.css';
import Profile from "./components/Profile-menu/Profile";
import Search from "./components/Search/Search";
import Category from "./components/Category/Category";
import People from "./components/People/People";
import Suggestion from "./components/Suggestion/Suggestion";
import Explore from "./components/Explore/Explore";
import {HashRouter, Route, withRouter} from "react-router-dom";
import Posts from "./components/Posts/Posts";

import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/Users/UserProfile/UserProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import EventContainer from "./components/Events/EventContainer";
import MyEventContainer from "./components/MyEvents/MyEventContainer";
import HeaderContainer from "./components/Header/HeaderConteiner";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Loading from "./components/common/Conponents/Loading";
import store from "./Redux/redux-store";
import withSuspense from "./hoc/Suspense";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
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
                    <Route path="/Dialogs" render={withSuspense(DialogsContainer)}/>
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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);


const SocialNetworkApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp




