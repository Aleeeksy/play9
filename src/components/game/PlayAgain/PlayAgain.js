import React from "react";
import "./PlayAgain.css";
import PropTypes from "prop-types";

const PlayAgain = ({gameStatus, startNewGame}) => (
    <div className="game-done">
        <div className="message" style={{color: gameStatus === 'lost' ? 'red' : 'green'}}>
            {gameStatus === 'lost' ? 'Game over' : 'You win!'}
        </div>
        <button onClick={startNewGame}>Play Again</button>
    </div>
);

PlayAgain.protoTypes = {
    gameStatus: PropTypes.string.isRequired,
    startNewGame: PropTypes.func.isRequired
}

export default PlayAgain;