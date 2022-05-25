import React from "react"
import ss from "./style.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setEnAction, setRuAction} from "../../redux/translate/actions";

export const Header = () => {
    const dispatch = useDispatch()
    const {language} = useSelector(state => state.translate)

    function changeLang() {
        language === "ru" ? dispatch(setEnAction()) : dispatch(setRuAction())
    }
    return (
        <div className={ss.wrapper}>
            <div className={ss.logo}>
                marck
            </div>
            <div className={ss.buttonBar}>
                <button>тема</button>
                <button onClick={changeLang}>язык</button>
            </div>
        </div>
    )
}