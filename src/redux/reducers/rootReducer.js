import {combineReducers} from "redux";
import stars from "./starsReducer";
import numbers from "./numbersReducer";
import seconds from "./timeReducer";

const rootReducer = combineReducers({
    stars,
    numbers,
    seconds
})

export default rootReducer;