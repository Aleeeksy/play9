import * as types from "./actionTypes";
import utils from "../../math-utils";


export function updateNumberOfStars(availableNumbers) {
    return {type: types.UPDATE_NUMBER_OF_STARS, availableNumbers: availableNumbers};
}

export function resetStars() {
    return (dispatch) => {
        dispatch(updateNumberOfStars(utils.range(1, 9)))
    }
}
