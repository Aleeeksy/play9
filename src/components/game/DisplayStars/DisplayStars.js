import React from "react";
import utils from "../../../math-utils"
import "./DisplayStars.css";
import PropTypes from "prop-types";

const DisplayStars = ({count}) => (
    <>
        {
            utils.range(1, count).map(starId =>
                <div key={starId} className='star'/>
            )
        }
    </>
);

DisplayStars.propTypes = {
    count: PropTypes.number.isRequired
}

export default DisplayStars;