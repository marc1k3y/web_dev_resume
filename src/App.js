import React, { useEffect } from "react"
import "./App.css"
import { Header } from "./components/header"
import { Candidate } from "./components/candidate"
import { Info } from "./components/info"
import { Cv } from "./components/cv"
import { useDispatch, useSelector } from "react-redux"
import { dark, light } from "./components/themer"
import { setDarkAction } from "./redux/theme/actions"
import { setEnAction } from "./redux/translate/actions"

export default function App() {
  const dispatch = useDispatch()
  const { theme } = useSelector((state) => state.theme)

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme")
    const currentLang = localStorage.getItem("lang")
    currentTheme === "dark" && dispatch(setDarkAction())
    currentLang === "en" && dispatch(setEnAction())
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      <div
        className="content"
        style={{
          backgroundColor: theme === "light" ? light.mainBack : dark.mainBack,
        }}>
        <Candidate />
        <Info />
        <Cv />
      </div>
    </div>
  )
}
