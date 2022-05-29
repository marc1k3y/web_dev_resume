import React from "react"
import ss from "./style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setEnAction, setRuAction } from "../../redux/translate/actions"
import { setDarkAction, setLightAction } from "../../redux/theme/actions"
import { dark, light } from "../themer"
import lightBtn from "../../assets/light.svg"
import darkBtn from "../../assets/dark.svg"

export const Header = () => {
    const dispatch = useDispatch()
    const { language } = useSelector(state => state.translate)
    const { theme } = useSelector(state => state.theme)

    function changeLang() {
        dispatch(language === "ru" ? setEnAction() : setRuAction())
    }

    function changeTheme() {
        dispatch(theme === "light" ? setDarkAction() : setLightAction())
    }

    return (
        <div className={ss.wrapper}
            style={{
                backgroundColor: theme === "light" ? light.header : dark.header,
                boxShadow: theme === "light" ? light.headerShadow : dark.headerShadow
            }}>
            <div className={ss.logo}
                style={{ color: theme === "light" ? light.headerFont : dark.headerFont }}>
                marck
            </div>
            <div className={ss.buttonBar}>
                <button onClick={changeTheme}>
                    <img src={theme === "light" ? darkBtn : lightBtn} alt={"theme"} />
                </button>
                <button onClick={changeLang}
                    style={{ color: theme === "light" ? light.headerFont : dark.headerFont }}>
                    {language === "ru" ? "EN" : "RU"}
                </button>
            </div>
        </div>
    )
}