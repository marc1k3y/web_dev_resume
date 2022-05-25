import React from "react"
import "./App.css"
import {Header} from "./components/header"
import {Candidate} from "./components/candidate"
import {Info} from "./components/info"
import {Cv} from "./components/cv"
import {useSelector} from "react-redux";
import {dark, light} from "./components/themer";

export default function App() {
    const {theme} = useSelector(state => state.theme)
    return (
        <div className="app">
            <Header/>
            <div className="content"
                 style={{backgroundColor: theme === "light" ? light.mainBack : dark.mainBack}}>
                <Candidate/>
                <Info/>
                <Cv/>
            </div>
        </div>
    )
}
