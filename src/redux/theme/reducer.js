import {SET_DARK, SET_LIGHT} from "./actions";

const defaultState = {
    theme: "light"
}

export default function ThemeReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_DARK:
            localStorage.setItem("theme", "dark")
            return {...state, theme: "dark"}
        case SET_LIGHT:
            localStorage.setItem("theme", "light")
            return {...state, theme: "light"}
        default:
            return state
    }
}