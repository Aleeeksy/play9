import PlayAgain from "../PlayAgain/PlayAgain";
import DisplayStars from "../DisplayStars/DisplayStars";
import utils from "../../../math-utils";
import PlayNumber from "../PlayNumber/PlayNumber";
import React from "react";
import PropTypes from "prop-types";

const GamePage = ({gameStatus, startNewGame, stars, numberStatus, handleNumberClick, secondsLeft}) => {
    return (
        <div className="game">
            <div className="body">
                <div className="left">
                    {gameStatus !== 'active'
                        ? <PlayAgain startNewGame={startNewGame} gameStatus={gameStatus}/>
                        : <DisplayStars count={stars}/>
                    }
                </div>
                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            number={number}
                            status={numberStatus(number)}
                            handleNumberClick={handleNumberClick}
                        />
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {secondsLeft}</div>
        </div>
    );
}

GamePage.propTypes = {
    gameStatus: PropTypes.string.isRequired,
    startNewGame: PropTypes.func.isRequired,
    stars: PropTypes.number.isRequired,
    numberStatus: PropTypes.func.isRequired,
    handleNumberClick: PropTypes.func.isRequired,
    secondsLeft: PropTypes.number.isRequired
}

export default GamePage;