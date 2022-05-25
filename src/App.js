import React from "react"
import "./App.css"
import {Header} from "./components/header"
import {Candidate} from "./components/candidate"
import {Info} from "./components/info"
import {Cv} from "./components/cv"

export default function App() {
    return (
        <div className="app">
            <Header/>
            <div className="content">
                <Candidate/>
                <Info/>
                <Cv/>
            </div>
        </div>
    )
}
