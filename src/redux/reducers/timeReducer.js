import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function starsReducer(state = initialState.secondsLeft, action) {
    switch (action.type) {
        case types.DECREASE_TIME:
            return state - 1;
        case types.RESET_TIME:
            return initialState.secondsLeft;
        default:
            return state;
    }
}