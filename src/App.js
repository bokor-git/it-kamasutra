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


const App = () => {
  return (

        <div class="wrapper">
            <Header/>
            <Profile/>
            <Category/>
            <Search/>
            <People/>
            <Events/>
            <Suggestion/>
            <Explore/>
            <Weather/>
        </div>


  )

}



export default App;


