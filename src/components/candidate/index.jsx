import React, {useEffect, useState} from "react"
import ss from "./style.module.css"
import reactLogo from "../../assets/react.svg"
import avatar from "../../assets/avatar.jpg"
import sandClock from "../../assets/sand_clock.svg"
import {TimeCounter} from "../timer"
import {useSelector} from "react-redux";
import {data} from "./data";

export const Candidate = () => {
    const {language} = useSelector(state => state.translate)
    const [exp, setExp] = useState()

    const interval = setInterval(() => setExp(TimeCounter), 1000)

    useEffect(() => () => clearInterval(interval), [interval])

    return (
        <div className={ss.wrapper}>
            <div className={ss.avatar}>
                <div className={ss.reactLogo}>
                    <img src={reactLogo} alt={"reactLogo"}/>
                    <p>{language === "ru" ? data.degree.ru : data.degree.en}</p>
                </div>
                <img src={avatar} alt={"avatar"} />
            <div className={ss.expRealTime}>
                <img src={sandClock} alt={"timer"} />
                <p>{exp}</p>
            </div>
            </div>
            <div className={ss.name}>
                {language === "ru" ? data.name.ru : data.name.en}
            </div>
        </div>
    )
}