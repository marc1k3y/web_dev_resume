import React, { useState } from "react"
import ss from "./style.module.css"
import { useSelector } from "react-redux"
import { dark, light } from "../themer"
import { translate } from "../translate"

export const Info = () => {
  const { language } = useSelector((state) => state.translate)
  const { theme } = useSelector((state) => state.theme)
  const [page, setPage] = useState(0)

  function nextPage() {
    const maxPage = translate.postsTitleEn.length - 1
    page === maxPage ? setPage(0) : setPage(page + 1)
  }

  function backPage() {
    const maxPage = translate.postsTitleEn.length - 1
    page === 0 ? setPage(maxPage) : setPage(page - 1)
  }

  return (
    <div
      className={ss.wrapper}
      style={{
        backgroundColor: theme === "light" ? light.bigBlock : dark.bigBlock,
        boxShadow:
          theme === "light"
            ? `0 0 10px 0px ${light.bigBlockShadow}`
            : `0 0 10px 0px ${dark.bigBlockShadow}`,
      }}>
      <div className={ss.header}>
        <button
          onClick={backPage}
          style={{
            color: theme === "light" ? light.infoBtnFont : dark.infoBtnFont,
          }}>
          {language === "ru"
            ? translate.postNavBtn.back.ru
            : translate.postNavBtn.back.en}
        </button>
        <div
          className={ss.title}
          style={{
            backgroundColor:
              theme === "light" ? light.infoTitle : dark.infoTitle,
            color: theme === "light" ? light.infoTitleFont : dark.infoTitleFont,
          }}>
          {language === "ru"
            ? translate.postsTitleRu[page]
            : translate.postsTitleEn[page]}
        </div>
        <button
          onClick={nextPage}
          style={{
            color: theme === "light" ? light.infoBtnFont : dark.infoBtnFont,
          }}>
          {language === "ru"
            ? translate.postNavBtn.next.ru
            : translate.postNavBtn.next.en}
        </button>
      </div>
      <div
        className={ss.info}
        style={{ color: theme === "light" ? light.infoFont : dark.infoFont }}>
        {language === "ru" ? translate.postsRu[page] : translate.postsEn[page]}
      </div>
    </div>
  )
}
