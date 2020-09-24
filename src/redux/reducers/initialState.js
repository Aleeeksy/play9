import utils from "../../math-utils";

export default {
    secondsLeft: 15,
    stars: utils.random(1, 9),
    numbers: {
        available: utils.range(1, 9),
        candidate: []
    }
}