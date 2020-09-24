import * as types from "./actionTypes";
import utils from "../../math-utils";

export function updateAvailableNumbers(availableNumbers) {
    return {type: types.UPDATE_AVAILABLE_NUMBERS, availableNumbers: availableNumbers};
}

export function updateCandidateNumbers(candidateNumbers) {
    return {type: types.UPDATE_CANDIDATE_NUMBERS, candidateNumbers: candidateNumbers};
}

export function resetNumbers() {
    return (dispatch) => {
        dispatch(updateAvailableNumbers(utils.range(1, 9)))
        dispatch(updateCandidateNumbers([]))
    }
}
