import {combineReducers, createStore} from "redux"
import TranslateReducer from "./translate/reducer";

const rootReducer = combineReducers({
    translate: TranslateReducer
})

export const store = createStore(rootReducer)