import utils from "../../math-utils";
import "./GamePage/GamePage.css"
import React, {useEffect} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import * as starsActions from "../../redux/actions/starsActions";
import * as numbersActions from "../../redux/actions/numbersActions";
import * as timeActions from "../../redux/actions/timeActions";
import GamePage from "./GamePage/GamePage";

const GameContainer = (props) => {
    useEffect(() => {
        if (props.secondsLeft > 0 && props.availableNumbers.length > 0) {
            const timerId = setTimeout(() => props.decreaseSecondsLeft(), 1000)
            return () => clearTimeout(timerId);
        }
    }, [props.secondsLeft]);

    const candidatesAreWrong = utils.sum(props.candidateNumbers) > props.stars;

    const gameStatus = props.availableNumbers.length === 0
        ? 'won'
        : (props.secondsLeft === 0 ? 'lost' : 'active');

    const updateGameState = (newCandidateNumbers) => {
        if (utils.sum(newCandidateNumbers) !== props.stars) {
            props.updateCandidateNumbers(newCandidateNumbers);
        } else {
            const newAvailableNumbers = props.availableNumbers.filter(n => !newCandidateNumbers.includes(n))
            props.updateAvailableNumbers(newAvailableNumbers);
            props.updateCandidateNumbers([]);
            if (newAvailableNumbers.length > 0) {
                props.updateNumberOfStars(newAvailableNumbers);
            }
        }
    }

    const numberStatus = (number) => {
        if (!props.availableNumbers.includes(number)) {
            return 'used';
        }
        if (props.candidateNumbers.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }
        return 'available';
    };

    const handleNumberClick = (number, currentStatus) => {
        if (gameStatus !== 'active' || currentStatus === 'used') {
            return;
        }
        const newCandidateNumbers = currentStatus === 'available'
            ? props.candidateNumbers.concat(number)
            : props.candidateNumbers.filter(cn => cn !== number);

        updateGameState(newCandidateNumbers)
    }

    return (
        <>
            <h2>Play 9</h2> <br/>
            <GamePage handleNumberClick={handleNumberClick} startNewGame={props.startNewGame} stars={props.stars}
                      numberStatus={numberStatus} secondsLeft={props.secondsLeft} gameStatus={gameStatus}/>
        </>
    );
};

GameContainer.propTypes = {
    stars: PropTypes.number.isRequired,
    secondsLeft: PropTypes.number.isRequired,
    availableNumbers: PropTypes.array.isRequired,
    candidateNumbers: PropTypes.array.isRequired,
    updateNumberOfStars: PropTypes.func.isRequired,
    updateAvailableNumbers: PropTypes.func.isRequired,
    updateCandidateNumbers: PropTypes.func.isRequired,
    decreaseSecondsLeft: PropTypes.func.isRequired,
    startNewGame: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        stars: state.stars,
        availableNumbers: state.numbers.available,
        candidateNumbers: state.numbers.candidate,
        secondsLeft: state.seconds
    }
}

const mapDispatchToProps = {
    updateNumberOfStars: starsActions.updateNumberOfStars,
    updateAvailableNumbers: numbersActions.updateAvailableNumbers,
    updateCandidateNumbers: numbersActions.updateCandidateNumbers,
    decreaseSecondsLeft: timeActions.decreaseSecondsLeft
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);