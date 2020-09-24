import React from "react";
import GameContainer from "../GameContainer";
import * as gameActions from "../../../redux/actions/gameActions";
import {connect} from "react-redux";

const StarMatch = ({resetGame}) => {
    return <GameContainer startNewGame={() => resetGame()}/>;
};

const mapDispatchToProps = {
    resetGame: gameActions.resetGame
}

export default connect(
    (() => Object()),
    mapDispatchToProps
)(StarMatch);