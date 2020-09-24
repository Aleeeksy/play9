import * as types from "./actionTypes";

export function resetSeconds() {
    return {type: types.RESET_TIME};
}

export function decreaseSecondsLeft() {
    return {type: types.DECREASE_TIME};
}