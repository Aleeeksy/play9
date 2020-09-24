import React from "react";
import "./PlayNumber.css"
import PropTypes from "prop-types";

const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

const PlayNumber = ({status, number, handleNumberClick}) => (
    <button
        className="number"
        style={{background: colors[status]}}
        onClick={() => handleNumberClick(number, status)}
    >
        {number}
    </button>
);

PlayNumber.propTypes = {
    status: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    handleNumberClick: PropTypes.func.isRequired
}

export default PlayNumber;