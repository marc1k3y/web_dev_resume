import {SET_EN, SET_RU} from "./actions";

const defaultState = {
    language: "ru"
}

export default function TranslateReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_EN:
            return {...state, language: "en"}
        case SET_RU:
            return {...state, language: "ru"}
        default:
            return state
    }
}