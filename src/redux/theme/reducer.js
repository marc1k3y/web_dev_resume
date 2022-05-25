import {SET_DARK, SET_LIGHT} from "./actions";

const defaultState = {
    theme: "light"
}

export default function ThemeReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_DARK:
            return {...state, theme: "dark"}
        case SET_LIGHT:
            return {...state, theme: "light"}
        default:
            return state
    }
}