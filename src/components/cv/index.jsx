import React from "react"
import ss from "./style.module.css"
import {saveAs} from "file-saver"
import {Document, Page} from "react-pdf"
import pdf from "../../assets/naberezhnykh_mark.pdf"
import {useSelector} from "react-redux"
import {dark, light} from "../themer"
import {translate} from "../translate";

export const Cv = () => {
    const {language} = useSelector(state => state.translate)
    const {theme} = useSelector(state => state.theme)

    function downloadCv() {
        saveAs(
            pdf, "Mark_Naberezhnykh.pdf"
        )
    }

    return (
        <div className={ss.wrapper}
             style={{
                 backgroundColor: theme === "light" ? light.bigBlock : dark.bigBlock,
                 boxShadow: theme === "light"
                     ? `0 0 10px 0px ${light.bigBlockShadow}`
                     : `0 0 10px 0px ${dark.bigBlockShadow}`
             }}>
            <Document file={pdf} className={ss.document}>
                <Page pageNumber={1}/>
            </Document>
            <button onClick={downloadCv}
                    style={{color: theme === "light" ? light.downloadCvFont : dark.downloadCvFont}}>
                {language === "ru" ? translate.downloadCv.ru : translate.downloadCv.en}
            </button>
        </div>
    )
}