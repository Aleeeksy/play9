import {resetNumbers} from "./numbersActions";
import {resetStars} from "./starsActions";
import {resetSeconds} from "./timeActions";

export function resetGame() {
    return (dispatch) => {
        dispatch(resetSeconds())
        dispatch(resetNumbers())
        dispatch(resetStars())
    }
}

