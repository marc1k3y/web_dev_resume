import React from "react"
import ss from "./style.module.css"
import {Document, Page} from "react-pdf"
import pdf from "../../assets/sample.pdf"

export const Cv = () => {
    return (
        <div className={ss.wrapper}>
            <Document file={pdf}>
                <Page pageNumber={1}/>
            </Document>
            <button>
                DOWNLOAD CV
            </button>
        </div>
    )
}