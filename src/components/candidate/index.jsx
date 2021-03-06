import React, { useEffect, useState } from "react"
import ss from "./style.module.css"
import reactLogo from "../../assets/react.svg"
import avatar from "../../assets/avatar.jpg"
import sandClock from "../../assets/sand_clock.svg"
import { TimeCounter } from "../timer"
import { useSelector } from "react-redux"
import { dark, light } from "../themer"
import { translate } from "../translate"

export const Candidate = () => {
    const { language } = useSelector(state => state.translate)
    const { theme } = useSelector(state => state.theme)
    const [exp, setExp] = useState()

    const interval = setInterval(() => setExp(TimeCounter), 1000)

    useEffect(() => () => clearInterval(interval), [interval])

    return (
        <div className={ss.wrapper}
            style={{
                backgroundColor: theme === "light" ? light.bigBlock : dark.bigBlock,
                boxShadow: theme === "light"
                    ? `0 0 10px 0px ${light.bigBlockShadow}`
                    : `0 0 10px 0px ${dark.bigBlockShadow}`
            }}>
            <div className={ss.avatar}>
                <div className={ss.reactLogo}
                    style={{ backgroundColor: theme === "light" ? light.reactLogo : dark.reactLogo }}>
                    <img src={reactLogo} alt={"reactLogo"} />
                    <p style={{ color: theme === "light" ? light.reactLogoFont : dark.reactLogoFont }}>
                        {language === "ru" ? translate.degree.ru : translate.degree.en}
                    </p>
                </div>
                <img src={avatar} alt={"avatar"} />
                <div className={ss.expRealTime}
                    style={{
                        backgroundColor: theme === "light" ? light.expBack : dark.expBack,
                        color: theme === "light" ? light.expFont : dark.expFont
                    }}>
                    <p>{language === "ru" ? translate.expTitle.ru : translate.expTitle.en}</p>
                    <div>
                        <img src={sandClock} alt={"timer"} />
                        <p>{language === "ru" ? exp?.ru : exp?.en}</p>
                    </div>
                </div>
            </div>
            <div className={ss.name}
                style={{
                    backgroundColor: theme === "light" ? light.nameBack : dark.nameBack,
                    color: theme === "light" ? light.nameFont : dark.nameFont
                }}>
                {language === "ru" ? translate.name.ru : translate.name.en}
            </div>
        </div>
    )
}