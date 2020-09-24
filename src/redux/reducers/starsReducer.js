import initialState from "./initialState";
import * as types from "../actions/actionTypes";
import utils from "../../math-utils";

export default function starsReducer(state = initialState.stars, action) {
    switch (action.type) {
        case types.UPDATE_NUMBER_OF_STARS:
            return utils.randomSumIn(action.availableNumbers, 9);
        default:
            return state;
    }
}