import {combineReducers, createStore} from "redux"
import TranslateReducer from "./translate/reducer";
import ThemeReducer from "./theme/reducer";

const rootReducer = combineReducers({
    translate: TranslateReducer,
    theme: ThemeReducer
})

export const store = createStore(rootReducer)