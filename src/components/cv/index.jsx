import React from "react"
import ss from "./style.module.css"
import {Document, Page} from "react-pdf"
import pdf from "../../assets/sample.pdf"
import {useSelector} from "react-redux";
import {dark, light} from "../themer";

export const Cv = () => {
    const {theme} = useSelector(state => state.theme)
    return (
        <div className={ss.wrapper}
             style={{
                 backgroundColor: theme === "light" ? light.bigBlock : dark.bigBlock,
                 boxShadow: theme === "light"
                     ? `0 0 10px 0px ${light.bigBlockShadow}`
                     : `0 0 10px 0px ${dark.bigBlockShadow}`
             }}>
            <Document file={pdf}>
                <Page pageNumber={1}/>
            </Document>
            <button>
                DOWNLOAD CV
            </button>
        </div>
    )
}