import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function numbersReducer(state = initialState.numbers, action) {
    switch (action.type) {
        case types.UPDATE_AVAILABLE_NUMBERS:
            return {...state, available: action.availableNumbers};
        case types.UPDATE_CANDIDATE_NUMBERS:
            return {...state, candidate: action.candidateNumbers};
        default:
            return state;
    }
}